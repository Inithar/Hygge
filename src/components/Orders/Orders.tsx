import { Link, useLocation } from "react-router-dom";

import { useOrders } from "../../hooks/api/useOrders";

import { Text } from "../Text";
import { Badge } from "../Badge/Badge";
import { Spinner } from "../Spinner";
import { Pagination } from "../Pagination/Pagination";
import { Filter } from "../Filter/Filter";
import {
  Container,
  Detail,
  Divider,
  FilterContainer,
  Header,
  Information,
  NoOrdersContainer,
  Order,
  PaginationContainer,
  SpinnerContainer,
} from "./Orders.styled";

import { convertOrderDate } from "../../utils/convertOrderDate";
import { ORDERS_PAGE_SIZE } from "../../constants/settings";

const options = [
  { label: "Last 30 days", value: "30" },
  { label: "Past 3 months", value: "90" },
  { label: "Archived", value: "from-the-beginning" },
];

export const Orders = () => {
  const { orders, count, isLoading, error } = useOrders();
  const { pathname } = useLocation();

  if (isLoading) {
    return (
      <SpinnerContainer>
        <Spinner size="lg" />
      </SpinnerContainer>
    );
  }

  if (!count) {
    return (
      <NoOrdersContainer>
        <img src="/icons/open-box.svg" alt="Empty box icon" />
        <p>You currently have no orders.</p>
        <Link to="/account/orders">View all orders</Link>
        <Link to="/products">Go shopping</Link>
      </NoOrdersContainer>
    );
  }

  if (error) return <div>error</div>;

  return (
    <>
      {pathname === "/account/orders" ? (
        <FilterContainer>
          <Filter options={options} filterField="period" />
        </FilterContainer>
      ) : (
        <Information>List of your orders from the last 14 days</Information>
      )}

      <Container>
        <Header>
          <Text>Order Number</Text>
          <Text>Order Date</Text>
          <Text>Amount</Text>
          <Text>Status</Text>
        </Header>

        {orders?.map(({ id, created_at, status, amount }) => (
          <Order to={`/account/orders/${id}`} key={id}>
            <Detail>
              <Text>Order Number</Text>
              <Divider />
              <Text>{id}</Text>
            </Detail>
            <Detail>
              <Text>Order Date</Text>
              <Divider />
              <Text>{convertOrderDate(created_at).date}</Text>
            </Detail>
            <Detail>
              <Text>Amount</Text>
              <Divider />
              <Text>${amount}</Text>
            </Detail>
            <Detail>
              <Text>Status</Text>
              <Divider />
              <Badge color="blue">{status}</Badge>
            </Detail>
          </Order>
        ))}
      </Container>

      <PaginationContainer>
        <Pagination count={Number(count)} pageSize={ORDERS_PAGE_SIZE} />
      </PaginationContainer>
    </>
  );
};
