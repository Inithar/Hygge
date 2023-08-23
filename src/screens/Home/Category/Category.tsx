import { Icon } from "../../../components/Icon/Icon";
import { Text } from "../../../components/Text";
import { StyledLink } from "./Category.styled";

type CategoryProps = {
  icon: string;
  name: string;
};

export const Category = ({ icon, name }: CategoryProps) => (
  <StyledLink to={`/products?category=${name}`} draggable="false">
    <Icon src={icon ?? ""} alt={`${name} icon`} iconSize="lg" />
    <Text fontSize="sm" fontFamily={"montserratSemiBold"}>
      {name}
    </Text>
  </StyledLink>
);
