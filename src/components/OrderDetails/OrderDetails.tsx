import { Text } from "../Text";
import { Container, Detail, Divider } from "./OrderDetails.styled";

import { convertOrderDate } from "../../utils/convertOrderDate";

import { PopulateOrder } from "../../types/collection";

type OrderDetailsProps = {
  smallFontSize?: boolean;
} & PopulateOrder;

export const OrderDetails = ({
  name,
  id,
  surname,
  created_at,
  phone,
  email,
  address: { city, country, houseNumber, flatNumber, street, postcode },
  smallFontSize,
}: OrderDetailsProps) => {
  const { time, date } = convertOrderDate(created_at);

  return (
    <Container>
      <Detail smallFontSize={smallFontSize}>
        <Text>Order Number</Text>
        <Divider />
        <div>
          <Text>{id}</Text>
        </div>
      </Detail>

      <Detail smallFontSize={smallFontSize}>
        <Text>Order Date</Text>
        <Divider />
        <div>
          <Text>{date}</Text>
          <Text>{time}</Text>
        </div>
      </Detail>

      <Detail smallFontSize={smallFontSize}>
        <Text>Shipping Address</Text>
        <Divider />
        <div>
          <Text>
            {street} {houseNumber} {flatNumber && `/ ${flatNumber}`}
          </Text>
          <Text>
            {city}, {postcode}
          </Text>
          <Text>{country}</Text>
        </div>
      </Detail>

      <Detail smallFontSize={smallFontSize}>
        <Text>Personal Information</Text>
        <Divider />
        <div>
          <Text>
            {name} {surname}
          </Text>
          <Text>{email}</Text>
          <Text>{phone}</Text>
        </div>
      </Detail>
    </Container>
  );
};
