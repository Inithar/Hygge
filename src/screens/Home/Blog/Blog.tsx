import { useWindowSize } from "../../../hooks/useWindowSize";

import { Slider } from "../../../components/Slider/Slider";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { BlogPost } from "../../../components/BlogPost/BlogPost";
import { LinkButton } from "../../../components/Button";
import { ButtonContainer, Container, StyledSection } from "./Blog.styled";

import { posts } from "../../../data/home";
import { BREAKPOINTS } from "../../../constants/breakpoints";

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  speed: 600,
  adaptiveHeight: true,
};

export const Blog = () => {
  const { width } = useWindowSize();
  const isMobile = width < BREAKPOINTS.xs;
  const isTablet = width < BREAKPOINTS.md;

  const blogPosts = posts.map((post) => <BlogPost {...post} key={post.id} />);

  return (
    <StyledSection>
      <SectionTitle title="Check Out our Blog" subtitle="Our Blog" align={isTablet ? "center" : "start"} />

      {isMobile ? <Slider settings={settings}>{blogPosts}</Slider> : <Container>{blogPosts}</Container>}

      <ButtonContainer>
        <LinkButton to="/under-construction">View All</LinkButton>
      </ButtonContainer>
    </StyledSection>
  );
};
