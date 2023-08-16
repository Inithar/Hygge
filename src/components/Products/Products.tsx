import { useProducts } from "../../hooks/useProducts";

import { ProductsContainer } from "./Products.styled";
import { ProductItemSkeleton, ProductItem } from "../ProductItem/ProductItem";
import { useSearchParams } from "react-router-dom";

type ProductsProps = {
  numberOfProductSkeletons?: number;
};

export const Products = ({ numberOfProductSkeletons }: ProductsProps) => {
  const { products, isLoading } = useProducts();
  const [searchParams] = useSearchParams();

  if (isLoading) {
    return [...Array(numberOfProductSkeletons ?? 8).keys()].map(() => (
      <ProductItemSkeleton key={crypto.randomUUID()} />
    ));
  }

  function isInPriceRange(price: number, min: number, max?: number) {
    return max ? price >= min && price <= max : price >= min;
  }

  function priceAfterSale(price: number, sale: number | null) {
    return sale ? Math.floor(((100 - sale) / 100) * price) : price;
  }

  let filteredProducts = products;

  if (searchParams.get("category")) {
    const selectedCategories = searchParams.get("category")?.split(",");
    filteredProducts = products?.filter((product) => selectedCategories?.includes(product.category.name));
  }

  if (searchParams.get("brand")) {
    const selectedBrands = searchParams.get("brand")?.split(",");
    filteredProducts = products?.filter((product) => selectedBrands?.includes(product.brand.name));
  }

  if (searchParams.get("price")) {
    const selectedPrices = searchParams.get("price")?.split(",");

    filteredProducts = products?.filter(({ sale, price }) => {
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
      filteredProducts?.sort((a, b) => a.name.localeCompare(b.name) * modifier);
    }

    if (field === "price") {
      filteredProducts?.sort((a, b) => {
        const priceA = priceAfterSale(a.price, a.sale);
        const priceB = priceAfterSale(b.price, b.sale);

        return (priceA - priceB) * modifier;
      });
    }
  }

  return (
    <ProductsContainer>
      {filteredProducts?.map(
        (product) =>
          product.display && <ProductItem {...product} isNew={product.new} image={product.images[0]} key={product.id} />
      )}
    </ProductsContainer>
  );
};
