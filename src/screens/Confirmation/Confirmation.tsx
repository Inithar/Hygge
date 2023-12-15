import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useCart } from "../../hooks/context/useCart";
import { useOrder } from "../../hooks/api/useOrder";
import { useUpdateOrder } from "../../hooks/api/useUpdateOrder";

import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Text } from "../../components/Text";
import { Spinner } from "../../components/Spinner";
import { OrderItems } from "../../components/OrderItems/OrderItems";
import { OrderDetails } from "../../components/OrderDetails/OrderDetails";
import { Container, Description, SpinnerWrapper, StyledSection } from "./Confirmation.styled";

export const Confirmation = () => {
  const urlParams = new URLSearchParams(window.location.search);

  const status = urlParams.get("redirect_status");
  const orderId = Number(urlParams.get("order"));

  const { clearCart } = useCart();
  const { order, isLoading: isOrderLoading } = useOrder(orderId);
  const { updateOrder, isUpdating } = useUpdateOrder();

  useEffect(() => {
    if (status !== "succeeded" || isOrderLoading || isUpdating) {
      return;
    }

    if (order?.status === "pending payment") {
      updateOrder({ newOrderData: { status: "processing" }, id: order!.id });
      clearCart();
    }
  }, [status, order, updateOrder, clearCart, isOrderLoading, isUpdating]);

  if (isOrderLoading) {
    return (
      <SpinnerWrapper>
        <Spinner size="lg" />
      </SpinnerWrapper>
    );
  }

  if (!order) {
    return <div>error</div>;
  }

  if (status === "succeeded") {
    return (
      <StyledSection>
        <SectionTitle title="Your order has successfully been placed" subtitle="Congratulations" align="center" />

        <Container>
          <Description>
            <Text>
              You will find all the details about your order below, and we'll send you a shipping confirmation email as
              soon as your order ships.
            </Text>
            <Text>
              Questions? Suggestions? Insightful show thoughts? Shoot us an <Link to="/contact">email</Link>.
            </Text>
          </Description>

          <OrderDetails {...order} />
          <OrderItems orderId={orderId} />
        </Container>
      </StyledSection>
    );
  }
};
