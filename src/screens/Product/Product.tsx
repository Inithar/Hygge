import { useParams } from "react-router-dom";

import { useProductReviews } from "../../hooks/api/useProductReviews";

import { Features } from "./Features/Features";
import { Reviews } from "../../components/Reviews/Reviews";
import { RelatedProducts } from "./RelatedProducts/RelatedProducts";
import { Newsletter } from "../../components/Newsletter/Newsletter";

import { Spinner } from "../../components/Spinner";
import { SpinnerContainer } from "./Product.styled";

export const Product = () => {
  const { id } = useParams();
  const { reviews: data, isLoading } = useProductReviews(Number(id));

  const reviews = data?.map(({ name, surname, content, profile_image }) => ({
    name,
    surname,
    profileImg: profile_image,
    review: content,
  }));

  return (
    <>
      <Features />

      {isLoading ? (
        <SpinnerContainer>
          <Spinner size="lg" />
        </SpinnerContainer>
      ) : (
        reviews && <Reviews reviews={reviews} />
      )}

      <RelatedProducts />
      <Newsletter />
    </>
  );
};
