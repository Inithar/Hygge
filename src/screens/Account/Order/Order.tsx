import { useParams } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft as ArrowLeft } from "react-icons/md";

import { useOrder } from "../../../hooks/api/useOrder";

import { OrderDetails } from "../../../components/OrderDetails/OrderDetails";
import { OrderItems } from "../../../components/OrderItems/OrderItems";
import { Spinner } from "../../../components/Spinner";
import { Error } from "../../../components/Error/Error";
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
    return <Error />;
  }

  return (
    <Container>
      <BackButton to={"/account/orders"}>
        <ArrowLeft />
        <span>Back to orders</span>
      </BackButton>
      <OrderDetails {...order} smallFontSize />
      <OrderItems orderId={order.id} />
    </Container>
  );
};
