import { Link } from "react-router-dom";

import { Heading } from "../Heading";
import { Text } from "../Text";
import { Logo } from "../Logo/Logo";
import { StyledFooter, Box, Links, Socials } from "./Footer.styled";

import { socials, boxes } from "../../data/footer";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <Box>
        <Logo size="sm" />
        <Text fontSize="xs">&copy; {`${currentYear} - All rights reserved`}</Text>

        <Socials>
          {socials.map(({ Icon, href }) => (
            <Link to={href} key={crypto.randomUUID()}>
              <Icon />
            </Link>
          ))}
        </Socials>
      </Box>

      {boxes.map(({ heading, links }) => (
        <Box key={crypto.randomUUID()}>
          <Heading as="h4">{heading}</Heading>

          <Links>
            {links.map(({ label, href }) => (
              <Link to={href} key={crypto.randomUUID()}>
                {label}
              </Link>
            ))}
          </Links>
        </Box>
      ))}
    </StyledFooter>
  );
};
