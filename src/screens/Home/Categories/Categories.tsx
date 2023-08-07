import { useCategories } from "../../../hooks/useCategories";
import { useWindowSize } from "../../../hooks/useWindowSize";

import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Slider } from "../../../components/Slider/Slider";
import { Category } from "../Category/Category";
import { CategorySkeleton } from "../Category/Category.styled";
import { StyledSection } from "./Categories.styled";

import { breakpoints } from "../../../constants/breakpoints";

import { categoriesSectionData } from "../../../data/home";

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
  const { categories, isLoading } = useCategories();
  const { width } = useWindowSize();

  const isMobile = width < breakpoints.xs;

  return (
    <StyledSection>
      <SectionTitle
        title={categoriesSectionData.sectionTitle}
        subtitle={categoriesSectionData.sectionSubtitle}
        align={isMobile ? "center" : "start"}
      />

      <Slider settings={sliderSettings} gap="3.2rem">
        {isLoading
          ? [...Array(8).keys()].map(() => <CategorySkeleton key={crypto.randomUUID()} />)
          : categories?.map((category) => <Category {...category} key={category.id} />)}
      </Slider>
    </StyledSection>
  );
};
