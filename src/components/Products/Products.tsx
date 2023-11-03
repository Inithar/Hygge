import { useSearchParams } from "react-router-dom";

import { useProducts } from "../../hooks/api/useProducts";
import { isProductNew } from "../../utils/isProductNew";

import { ProductItemSkeleton, ProductItem } from "../ProductItem/ProductItem";
import { Pagination } from "../Pagination/Pagination";
import { ProductsContainer } from "./Products.styled";

import { PRODUCTS_PAGE_SIZE } from "../../constants/settings";

type ProductsProps = {
  numberOfProductSkeletons?: number;
  maxNumberOfProducts?: number;
};

function isInPriceRange(price: number, min: number, max?: number) {
  return max ? price >= min && price <= max : price >= min;
}

function priceAfterSale(price: number, sale: number | null) {
  return sale ? Math.floor(((100 - sale) / 100) * price) : price;
}

export const Products = ({ numberOfProductSkeletons, maxNumberOfProducts }: ProductsProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { products, isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <ProductsContainer>
        {[...Array(numberOfProductSkeletons ?? 8).keys()].map(() => (
          <ProductItemSkeleton key={crypto.randomUUID()} />
        ))}
      </ProductsContainer>
    );
  }

  if (!products || error) {
    return <div>error</div>;
  }

  let filteredProducts = products;

  if (searchParams.get("sale")) {
    filteredProducts = filteredProducts.filter((product) => Boolean(product.sale));
  }

  if (searchParams.get("new")) {
    filteredProducts = filteredProducts.filter((product) => isProductNew(product.created_at));
  }

  if (searchParams.get("category")) {
    const selectedCategories = searchParams.get("category")?.split(",");
    filteredProducts = filteredProducts.filter((product) => selectedCategories?.includes(product.category.name));
  }

  if (searchParams.get("price")) {
    const selectedPrices = searchParams.get("price")?.split(",");

    filteredProducts = filteredProducts.filter(({ sale, price }) => {
      const filteredSelectedPrices = selectedPrices?.filter((priceRange) => {
        const [min, max] = priceRange.split("-");
        return isInPriceRange(priceAfterSale(price, sale), Number(min), Number(max));
      });

      return filteredSelectedPrices?.length;
    });
  }

  if (searchParams.get("sort")) {
    const [field, direction] = searchParams.get("sort")!.split("-");
    const modifier = direction === "asc" ? 1 : -1;

    if (field === "name") {
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name) * modifier);
    }

    if (field === "price") {
      filteredProducts.sort((a, b) => {
        const priceA = priceAfterSale(a.price, a.sale);
        const priceB = priceAfterSale(b.price, b.sale);

        return (priceA - priceB) * modifier;
      });
    }
  }

  if (maxNumberOfProducts) {
    filteredProducts = filteredProducts.slice(0, maxNumberOfProducts);
  }

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  if (filteredProducts.length < PRODUCTS_PAGE_SIZE && page !== 1) {
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  }

  const indexOfLastProduct = page * PRODUCTS_PAGE_SIZE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PAGE_SIZE;

  return (
    <>
      <ProductsContainer>
        {filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct).map((product) => (
          <ProductItem {...product} createdAt={product.created_at} image={product.images[0]} key={product.id} />
        ))}
      </ProductsContainer>

      <Pagination count={filteredProducts.length} pageSize={PRODUCTS_PAGE_SIZE} />
    </>
  );
};
