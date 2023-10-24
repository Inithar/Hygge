import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart as CartIcon, FiUser as UserIcon, FiSearch as SearchIcon } from "react-icons/fi";

import { useWindowSize } from "../../hooks/useWindowSize";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";
import { useCart } from "../../hooks/context/useCart";
import { useUser } from "../../hooks/api/useUser";

import { Logo } from "../Logo/Logo";
import { Search } from "../Search/Search";
import { Cart } from "../Cart/Cart";
import { FocusTrap } from "../FocusTrap";
import { StyledHeader, Burger, Icons, Container, Navigation, Wrapper, CartContainer, Dot } from "./Header.styled";

import { breakpoints } from "../../constants/breakpoints";

import { links } from "../../data/header";

export const Header = () => {
  const [isNavigationActive, setIsNavigationActive] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const { width } = useWindowSize();
  const isMediumScreen = width >= breakpoints.md;
  const isLargeScreen = width >= breakpoints.lg;

  const { isAuthenticated } = useUser();
  const { items } = useCart();

  const containerId = crypto.randomUUID();
  const isContainerHidden = isMediumScreen ? false : !isNavigationActive;

  useDisableBodyScroll(isNavigationActive);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

          <Icons>
            {isMediumScreen && <SearchIcon />}

            <div>
              <Link to="/cart">
                <CartIcon />
                {items.length ? <Dot /> : null}
              </Link>

              {isLargeScreen && items.length ? (
                <CartContainer>
                  <Cart place="header" />
                </CartContainer>
              ) : null}
            </div>

            <Link to={isAuthenticated ? "/account/home" : "/login"}>
              <UserIcon />
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
