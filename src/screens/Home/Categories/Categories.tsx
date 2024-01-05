import { useCategories } from "../../../hooks/api/useCategories";
import { useWindowSize } from "../../../hooks/useWindowSize";

import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Slider } from "../../../components/Slider/Slider";
import { Category } from "../Category/Category";
import { CategorySkeleton } from "../Category/Category.styled";
import { Error } from "../../../components/Error/Error";
import { StyledSection } from "./Categories.styled";

import { BREAKPOINTS } from "../../../constants/breakpoints";

const sliderSettings = {
  className: "slider variable-width",
  arrows: true,
  accessibility: true,
  infinite: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  swipeToSlide: true,
};

export const Categories = () => {
  const { categories, isLoading, error } = useCategories();
  const { width } = useWindowSize();

  const isMobile = width < BREAKPOINTS.xs;

  if (error) {
    return <Error />;
  }

  return (
    <StyledSection>
      <SectionTitle title="Browse by Category" subtitle="The Categories" align={isMobile ? "center" : "start"} />

      <Slider settings={sliderSettings} gap="3.2rem">
        {isLoading
          ? [...Array(8).keys()].map(() => <CategorySkeleton key={crypto.randomUUID()} />)
          : categories?.map((category) => <Category {...category} key={category.id} />)}
      </Slider>
    </StyledSection>
  );
};
