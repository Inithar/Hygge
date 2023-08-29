import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { useWindowSize } from "../../hooks/useWindowSize";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";

import { StyledHeader, Burger, Icons, Container, Navigation, Wrapper } from "./Header.styled";
import { Logo } from "../Logo/Logo";
import { Icon } from "../Icon/Icon";
import { Search } from "../Search/Search";
import { FocusTrap } from "../FocusTrap";

import { breakpoints } from "../../constants/breakpoints";

import { links } from "../../data/header";
import { useUser } from "../../hooks/useUser";

export const Header = () => {
  const { isAuthenticated } = useUser();

  const [isNavigationActive, setIsNavigationActive] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useDisableBodyScroll(isNavigationActive);

  const { width } = useWindowSize();
  const isMediumScreen = width >= breakpoints.md;

  const containerId = crypto.randomUUID();
  const isContainerHidden = isMediumScreen ? false : !isNavigationActive;

  return (
    <FocusTrap active={isNavigationActive} breakpoint="md">
      <Wrapper scrollPosition={scrollPosition}>
        <StyledHeader>
          <Logo size="md" />

          <Container id={containerId} isActive={isNavigationActive} aria-hidden={isContainerHidden}>
            {!isMediumScreen && <Search />}

            <Navigation>
              <ul>
                {links.map(({ title, url }) => (
                  <li key={crypto.randomUUID()}>
                    <NavLink
                      to={url}
                      onClick={() => setIsNavigationActive(false)}
                      tabIndex={isMediumScreen || isNavigationActive ? 0 : -1}
                    >
                      {title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Navigation>
          </Container>

          {/* TODO add functionality to icons */}
          <Icons>
            {isMediumScreen && <Icon src="/icons/search.svg" iconSize="md" />}
            <Link to="/cart">
              <Icon src="/icons/cart.svg" iconSize="md" />
            </Link>
            <Link to={isAuthenticated ? "/account" : "/login"}>
              <Icon src="/icons/user.svg" iconSize="md" />
            </Link>
          </Icons>

          <Burger
            onClick={() => setIsNavigationActive((prev) => !prev)}
            isActive={isNavigationActive}
            aria-expanded={isNavigationActive}
            aria-controls={containerId}
            aria-label="Mobile Navigation Button"
          />
        </StyledHeader>
      </Wrapper>
    </FocusTrap>
  );
};
