import { useProducts } from "../../hooks/api/useProducts";

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
    return (
      <ProductsContainer>
        {[...Array(numberOfProductSkeletons ?? 8).keys()].map(() => (
          <ProductItemSkeleton key={crypto.randomUUID()} />
        ))}
      </ProductsContainer>
    );
  }

  function isInPriceRange(price: number, min: number, max?: number) {
    return max ? price >= min && price <= max : price >= min;
  }

  function priceAfterSale(price: number, sale: number | null) {
    return sale ? Math.floor(((100 - sale) / 100) * price) : price;
  }

  let filteredProducts = products;

  if (searchParams.get("brand")) {
    const selectedBrands = searchParams.get("brand")?.split(",");
    filteredProducts = filteredProducts?.filter((product) => selectedBrands?.includes(product.brand.name));
  }

  if (searchParams.get("category")) {
    const selectedCategories = searchParams.get("category")?.split(",");
    filteredProducts = filteredProducts?.filter((product) => selectedCategories?.includes(product.category.name));
  }

  if (searchParams.get("price")) {
    const selectedPrices = searchParams.get("price")?.split(",");

    filteredProducts = filteredProducts?.filter(({ sale, price }) => {
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
          product.display && (
            <ProductItem {...product} createdAt={product.created_at} image={product.images[0]} key={product.id} />
          )
      )}
    </ProductsContainer>
  );
};
