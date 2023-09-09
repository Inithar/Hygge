import { Outlet } from "react-router-dom";

import { useUser } from "../../hooks/useUser";

import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Section } from "../../components/Section";
import { Navigation } from "./Navigation/Navigation";
import { Container } from "./Account.styled";

export const Account = () => {
  const { user } = useUser();

  return (
    <Section>
      <SectionTitle title={`Hello ${user?.user_metadata.name}`} subtitle="Your account" margin />

      <Container>
        <Outlet />
        <Navigation />
      </Container>
    </Section>
  );
};
