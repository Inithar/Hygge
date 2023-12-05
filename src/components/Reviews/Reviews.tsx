import { useWindowSize } from "../../hooks/useWindowSize";

import { Text } from "../Text";
import { Slider } from "../Slider/Slider";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { StyledSection, Review, ProfileImg } from "./Reviews.styled";

import { BREAKPOINTS } from "../../constants/breakpoints";

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
};

export const Reviews = ({ reviews }: ReviewsProps) => {
  const { width } = useWindowSize();
  const isMobile = width < BREAKPOINTS.md;

  return (
    <StyledSection>
      <SectionTitle
        title={"What our Customers are Saying"}
        subtitle={"Our Reviews"}
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
