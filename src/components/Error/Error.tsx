import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";
import { Container, Image, Text, Heading } from "./Error.styled";

export const Error = () => {
  useDisableBodyScroll(true);

  return (
    <Container>
      <Image src="/images/something-went-wrong.png" alt="Falling man with a perforated parachute" />
      <Heading>Aaaah! Something went wrong</Heading>
      <Text>Brace yourself till we get the error fixed</Text>
      <Text>You may also refresh the page or try again later</Text>
    </Container>
  );
};
