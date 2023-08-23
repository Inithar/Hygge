import { Link } from "react-router-dom";

import { useWindowSize } from "../../hooks/useWindowSize";

import { Heading } from "../Heading";
import { Text } from "../Text";
import { Logo } from "../Logo/Logo";
import { Icon, IconProps } from "../Icon/Icon";
import { StyledFooter, Box, Links, Socials } from "./Footer.styled";

import { breakpoints } from "../../constants/breakpoints";

import { socials, boxes } from "../../data/footer";

export const Footer = () => {
  const { width } = useWindowSize();
  const currentYear = new Date().getFullYear();

  function getIconProps(src: string): IconProps {
    const isMobile = width < breakpoints.md;

    return {
      src,
      iconSize: "md",
      paddingSize: isMobile ? undefined : "sm",
      variation: isMobile ? undefined : "fill",
    };
  }

  return (
    <StyledFooter>
      <Box>
        <Logo size="sm" />
        <Text fontSize="xs">&copy; {`${currentYear} - All rights reserved`}</Text>

        <Socials>
          {socials.map(({ icon, href }) => (
            <Link to={href} key={crypto.randomUUID()}>
              <Icon {...getIconProps(icon)} />
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
