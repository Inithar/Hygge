import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useCategories } from "../../../hooks/api/useCategories";
import { useBrands } from "../../../hooks/api/useBrands";

import { Section } from "../../../components/Section";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Select } from "../../../components/Select/Select";
import { Products as ProductsGrid } from "../../../components/Products/Products";
import { SelectTag } from "../../../components/SelectTag/SelectTag";
import { Filters, FiltersButton, Container, SelectTags } from "./ProductsSection.styled";

import { sortByOptions, priceRangeOptions } from "../../../data/products";

type Filter<T> = T extends "sort" ? string | undefined : string[];

type FilterName = keyof Filters;

type Filters = {
  sort: string | undefined;
  price: string[];
  category: string[];
  brand: string[];
};

export const ProductsSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { categories, isLoading: isLoadingCategories } = useCategories();
  const { brands, isLoading: isLoadingBrands } = useBrands();

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    sort: setDefaultFilter("sort"),
    brand: setDefaultFilter("brand"),
    category: setDefaultFilter("category"),
    price: setDefaultFilter("price"),
  });

  function setOptionsArr(values: { name: string }[] | undefined, isLoading: boolean) {
    const optionsArr = isLoading ? [] : values!.map(({ name }) => ({ label: name, value: name }));
    return optionsArr!.sort((a, b) => a.label.localeCompare(b.label));
  }

  function setDefaultFilter<T extends FilterName>(key: T): Filter<T> {
    return (key === "sort" ? searchParams.get(key) ?? undefined : searchParams.get(key)?.split(",") ?? []) as Filter<T>;
  }

  function updateUrl(key: FilterName, value: string | string[]) {
    const updatedValue = Array.isArray(value) ? value.join(",") : value;
    value.length ? searchParams.set(key, updatedValue) : searchParams.delete(key);
    setSearchParams(searchParams);
  }

  function handleFilterChange(key: FilterName, value: string | string[]) {
    updateUrl(key, value);
    setFilters((prev) => ({ ...prev, [key]: value }));
  }

  function handleFilterDelete(key: FilterName, valueToDelete: string) {
    if (key === "sort") return;

    const updatedValue: string[] = filters[key].filter((value) => value !== valueToDelete);
    setFilters({ ...filters, [key]: updatedValue });
    updateUrl(key, updatedValue);
  }

  const selectTagsArr = Object.keys(filters)
    .filter((key) => Array.isArray(filters[key as FilterName]))
    .map((key) =>
      (filters[key as FilterName] as Array<string>).map((v) => {
        let value = v;

        if (key === "price") {
          const [min, max] = v.split("-");
          value = max ? `$${min} - $${max}` : `$${min}+`;
        }

        return (
          <SelectTag
            value={value}
            onDelete={() => handleFilterDelete(key as FilterName, v)}
            key={crypto.randomUUID()}
          />
        );
      })
    );

  return (
    <Section>
      <SectionTitle title="Explore our Products" subtitle="Our Products" margin />

      <Container>
        <FiltersButton isActive={isFiltersOpen} onClick={() => setIsFiltersOpen((prev) => !prev)}>
          <span>Filter by</span>
          <img src="/icons/arrow-down.svg" alt="arrow icon" />
        </FiltersButton>

        <Filters isActive={isFiltersOpen}>
          <Select
            multiple
            placeholder="Brand"
            selected={filters.brand}
            options={setOptionsArr(brands, isLoadingBrands)}
            onChange={(value) => handleFilterChange("brand", value)}
          />

          <Select
            multiple
            placeholder="Category"
            selected={filters.category}
            options={setOptionsArr(categories, isLoadingCategories)}
            onChange={(value) => handleFilterChange("category", value)}
          />

          <Select
            multiple
            placeholder="Price Range"
            selected={filters.price}
            options={priceRangeOptions}
            onChange={(value) => handleFilterChange("price", value)}
          />
        </Filters>

        <Select
          placeholder="Sort By"
          selected={filters.sort}
          options={sortByOptions}
          onChange={(value) => handleFilterChange("sort", value!)}
        />
      </Container>

      <SelectTags>{selectTagsArr.flat()}</SelectTags>

      <ProductsGrid numberOfProductSkeletons={12} />
    </Section>
  );
};
