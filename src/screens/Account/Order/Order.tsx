import { useParams } from "react-router-dom";

import { useOrder } from "../../../hooks/api/useOrder";

import { OrderDetails } from "../../../components/OrderDetails/OrderDetails";
import { OrderItems } from "../../../components/OrderItems/OrderItems";
import { Spinner } from "../../../components/Spinner";
import { BackButton, Container, SpinnerContainer } from "./Order.styled";

export const Order = () => {
  const { id } = useParams();
  const { order, isLoading, error } = useOrder(Number(id));

  if (isLoading) {
    return (
      <SpinnerContainer>
        <Spinner size="lg" />
      </SpinnerContainer>
    );
  }

  if (error || !order) {
    return <div>error</div>;
  }

  return (
    <Container>
      <BackButton to={"/account/orders"}>
        <img src="/icons/arrow-prev.svg" alt="Arrow pointing to the left" />
        <span>Back to orders</span>
      </BackButton>
      <OrderDetails {...order} smallFontSize />
      <OrderItems orderId={order.id} />
    </Container>
  );
};
