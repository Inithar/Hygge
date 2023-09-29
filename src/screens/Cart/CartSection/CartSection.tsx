import { useCart } from "../../../hooks/context/useCart";

import { Button } from "../../../components/Button";
import { Section } from "../../../components/Section";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Item } from "../Item/Item";
import { Receipt } from "../Receipt/Receipt";
import { Empty } from "../Empty/Empty";
import { Cart, Container, Items } from "./CartSection.styled";

export const CartSection = () => {
  const { items, isCartEmpty, clearCart } = useCart();

  return (
    <Section>
      <Container>
        <SectionTitle title="Shopping Cart" subtitle="Your Cart" />

        {!isCartEmpty && (
          <Button variation="secondary" onClick={clearCart} aria-label="Clear all products in cart">
            Clear All
          </Button>
        )}
      </Container>

      {isCartEmpty ? (
        <Empty />
      ) : (
        <Cart>
          <Items>
            {items.map((item) => (
              <Item {...item} key={item.id} />
            ))}
          </Items>

          <Receipt />
        </Cart>
      )}
    </Section>
  );
};
