import { Link } from "react-router-dom";

import { useUser } from "../../../hooks/api/useUser";
import { useUserFavoriteProducts } from "../../../hooks/api/useUserFavoriteProducts";

import { Wrapper } from "../Wrapper/Wrapper";
import { Spinner } from "../../../components/Spinner";
import { ProductItem } from "../../../components/ProductItem/ProductItem";
import { Pagination } from "../../../components/Pagination/Pagination";
import { Error } from "../../../components/Error/Error";
import { NoItems, Products, SpinnerContainer } from "./Wishlist.styled";

import { FAVORITE_PRODUCTS_PAGE_SIZE } from "../../../constants/settings";

export const Wishlist = () => {
  const { user } = useUser();
  const { favoriteProducts, count, isLoading, error } = useUserFavoriteProducts(user!.id);

  if (error) {
    return <Error />;
  }

  return (
    <Wrapper title="Your Wishlist">
      {isLoading ? (
        <SpinnerContainer>
          <Spinner size="lg" />
        </SpinnerContainer>
      ) : count ? (
        <>
          <Products>
            {favoriteProducts?.map((product) => (
              <ProductItem {...product} createdAt={product.created_at} image={product.images[0]} />
            ))}
          </Products>

          <Pagination count={count} pageSize={FAVORITE_PRODUCTS_PAGE_SIZE} />
        </>
      ) : (
        <NoItems>
          <img src="/images/empty-wishlist.png" alt="Bag with a sad heart" />
          <p>You currently have no orders.</p>
          <p>Add some items to your wishlist to save them for later.</p>
          <Link to="/products">Go shopping</Link>
        </NoItems>
      )}
    </Wrapper>
  );
};
