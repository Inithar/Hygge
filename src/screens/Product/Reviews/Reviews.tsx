import { useParams } from "react-router-dom";

import { useProductReviews } from "../../../hooks/api/useProductReviews";

import { Reviews as ReviewsComponent } from "../../../components/Reviews/Reviews";
import { Error } from "../../../components/Error/Error";
import { Loader } from "../Product.styled";

export const Reviews = () => {
  const { id } = useParams();
  const { reviews: data, isLoading, error } = useProductReviews(Number(id));

  if (isLoading) return <Loader />;

  if (!data || error) return <Error />;

  const reviews = data.map(({ name, surname, content, profile_image }) => ({
    name,
    surname,
    profileImg: profile_image,
    review: content,
  }));

  return <ReviewsComponent reviews={reviews} />;
};
