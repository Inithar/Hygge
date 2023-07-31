import { useState } from "react";
import { NavLink } from "react-router-dom";

import { useWindowSize } from "../../hooks/useWindowSize";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";

import { StyledHeader, Burger, Icons, Container, Navigation } from "./Header.styled";
import { Logo } from "../Logo/Logo";
import { Icon } from "../Icon/Icon";
import { Search } from "../Search/Search";
import { FocusTrap } from "../FocusTrap";

import { breakpoints } from "../../constants/breakpoints";

import { links } from "../../data/header";

export const Header = () => {
  const [isNavigationActive, setIsNavigationActive] = useState(false);
  useDisableBodyScroll(isNavigationActive);

  const { width } = useWindowSize();
  const isMediumScreen = width >= breakpoints.md;

  const containerId = crypto.randomUUID();
  const isContainerHidden = isMediumScreen ? false : !isNavigationActive;

  const handleNavigationToggle = () => setIsNavigationActive((prev) => !prev);
  const handleNavigationClose = () => setIsNavigationActive(false);

  return (
    <FocusTrap active={isNavigationActive} breakpoint="md">
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
                    onClick={handleNavigationClose}
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
          <Icon src="/icons/cart.svg" iconSize="md" />
          <Icon src="/icons/user.svg" iconSize="md" />
        </Icons>

        <Burger
          onClick={handleNavigationToggle}
          isActive={isNavigationActive}
          aria-expanded={isNavigationActive}
          aria-controls={containerId}
          aria-label="Mobile Navigation Button"
        />
      </StyledHeader>
    </FocusTrap>
  );
};
