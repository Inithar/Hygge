import { useWindowSize } from "../../hooks/useWindowSize";

import { Slider } from "../Slider/Slider";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { StyledSection, Review, ProfileImg } from "./Reviews.styled";
import { Text } from "../Text";

import { breakpoints } from "../../constants/breakpoints";

import { reviewsSectionData } from "../../data/shared";

type ReviewsProps = {
  reviews: {
    profileImg: string;
    name: string;
    surname: string;
    review: string;
  }[];
};

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  speed: 600,
  adaptiveHeight: true,
};

export const Reviews = ({ reviews }: ReviewsProps) => {
  const { width } = useWindowSize();
  const isMobile = width < breakpoints.md;

  return (
    <StyledSection>
      <SectionTitle
        title={reviewsSectionData.sectionTitle}
        subtitle={reviewsSectionData.sectionSubTitle}
        align={isMobile ? "center" : "start"}
      />

      <Slider settings={settings}>
        {reviews.map(({ profileImg, name, surname, review }) => (
          <Review key={crypto.randomUUID()}>
            <ProfileImg src={profileImg} alt="profile image" />
            <Text fontSize="xl" fontFamily={"montserratSemiBold"}>
              {name} {surname}
            </Text>
            <Text fontSize="lg">{review}</Text>
          </Review>
        ))}
      </Slider>
    </StyledSection>
  );
};
