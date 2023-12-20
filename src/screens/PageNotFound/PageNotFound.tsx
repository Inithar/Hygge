import { LinkButton } from "../../components/Button";
import { Wrapper, Image, Heading, Text } from "./PageNotFound.styled";

export const PageNotFound = () => {
  return (
    <Wrapper>
      <Image src="/images/404.png" alt="404 with a rocket and a cosmonaut" />
      <Heading>404 - Page not found</Heading>
      <Text>The page you are looking for might have been removed had its name changed or is temporary unavailable</Text>
      <LinkButton to="/">Go to homepage</LinkButton>
    </Wrapper>
  );
};
