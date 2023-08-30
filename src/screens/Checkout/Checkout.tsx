import { Cart } from "../../components/Cart/Cart";
import { Section } from "../../components/Section";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";

export const Checkout = () => {
  return (
    <Section>
      <SectionTitle title="Checkout" subtitle="Almost there" margin />
      <Cart />
    </Section>
  );
};
