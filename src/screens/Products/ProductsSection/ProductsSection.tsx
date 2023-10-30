import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MdOutlineKeyboardArrowDown as ArrowDown } from "react-icons/md";

import { useCategories } from "../../../hooks/api/useCategories";

import { Section } from "../../../components/Section";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Select } from "../../../components/Select/Select";
import { Products as ProductsGrid } from "../../../components/Products/Products";
import { SelectTag } from "../../../components/SelectTag/SelectTag";
import { CheckboxField } from "../../../components/CheckboxField/CheckboxField";
import { Filters, FiltersButton, Container, SelectTags, Checkboxes } from "./ProductsSection.styled";

import { sortByOptions, priceRangeOptions } from "../../../data/products";

type FilterName = keyof Filters;

type Filters = {
  sale: string | undefined;
  new: string | undefined;
  sort: string | undefined;
  price: string[];
  category: string[];
};

export const ProductsSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { categories, isLoading: isLoadingCategories } = useCategories();

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    sale: searchParams.get("sale") ?? undefined,
    new: searchParams.get("new") ?? undefined,
    sort: searchParams.get("sort") ?? undefined,
    category: searchParams.get("category")?.split(",") ?? [],
    price: searchParams.get("price")?.split(",") ?? [],
  });

  function setOptionsArr(values: { name: string }[] | undefined, isLoading: boolean) {
    const optionsArr = isLoading ? [] : values!.map(({ name }) => ({ label: name, value: name }));
    return optionsArr!.sort((a, b) => a.label.localeCompare(b.label));
  }

  function updateUrl(key: FilterName, value: string | string[]) {
    const updatedValue = Array.isArray(value) ? value.join(",") : value;
    value === "false" || !value.length ? searchParams.delete(key) : searchParams.set(key, updatedValue);
    setSearchParams(searchParams);
  }

  function handleFilterChange(key: FilterName, value: string | string[]) {
    updateUrl(key, value);
    setFilters((prev) => ({ ...prev, [key]: value }));
  }

  function handleFilterDelete(key: "price" | "category", valueToDelete: string) {
    const updatedValue = filters[key].filter((value) => value !== valueToDelete);
    setFilters({ ...filters, [key]: updatedValue });
    updateUrl(key, updatedValue);
  }

  return (
    <Section>
      <SectionTitle title="Explore our Products" subtitle="Our Products" margin />

      <Container>
        <FiltersButton isActive={isFiltersOpen} onClick={() => setIsFiltersOpen((prev) => !prev)}>
          <span>Filter by</span>
          <ArrowDown />
        </FiltersButton>

        <Filters isActive={isFiltersOpen}>
          <Checkboxes>
            <CheckboxField
              id="sale"
              label="On Sale"
              inputProps={{
                onChange: (e) => handleFilterChange("sale", String(e.target.checked)),
              }}
            />

            <CheckboxField
              id="new"
              label="New"
              inputProps={{
                onChange: (e) => handleFilterChange("new", String(e.target.checked)),
              }}
            />
          </Checkboxes>

          <Select
            multiple
            placeholder="Category"
            selected={filters.category}
            options={setOptionsArr(categories, isLoadingCategories)}
            onChange={(value) => handleFilterChange("category", value)}
          />

          <Select
            multiple
            placeholder="Price"
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

      <SelectTags>
        {Object.keys(filters)
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
                  onDelete={() => handleFilterDelete(key as "price" | "category", v)}
                  key={crypto.randomUUID()}
                />
              );
            })
          )
          .flat()}
      </SelectTags>

      <ProductsGrid numberOfProductSkeletons={12} />
    </Section>
  );
};
