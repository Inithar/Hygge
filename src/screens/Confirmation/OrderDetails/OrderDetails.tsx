import { Text } from "../../../components/Text";
import { Container, Detail, Divider } from "./OrderDetails.styled";

import { convertOrderDate } from "../../../utils/convertOrderDate";

import { PopulateOrder } from "../../../types/collection";

export const OrderDetails = ({
  name,
  id,
  surname,
  created_at,
  phone,
  email,
  address: { city, country, houseNumber, flatNumber, street, postcode },
}: PopulateOrder) => {
  const { time, date } = convertOrderDate(created_at);

  return (
    <Container>
      <Detail>
        <Text>Order Number</Text>
        <Divider />
        <div>
          <Text>{id}</Text>
        </div>
      </Detail>

      <Detail>
        <Text>Order Date</Text>
        <Divider />
        <div>
          <Text>{date}</Text>
          <Text>{time}</Text>
        </div>
      </Detail>

      <Detail>
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

      <Detail>
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
