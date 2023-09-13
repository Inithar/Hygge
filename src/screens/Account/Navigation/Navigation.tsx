import { Fragment } from "react";
import { Link } from "react-router-dom";

import { useLogout } from "../../../hooks/api/useLogout";

import { StyledNavigation, CategoryTitle, CategoryList, Divider } from "./Navigation.styled";

import { links } from "../../../data/account";

export const Navigation = () => {
  const { logout } = useLogout();

  return (
    <StyledNavigation>
      {links.map(({ category, links }) => (
        <Fragment key={crypto.randomUUID()}>
          <CategoryTitle>{category}</CategoryTitle>

          <CategoryList>
            {links.map(({ title, url, icon }) => (
              <li key={crypto.randomUUID()}>
                <Link to={url}>
                  <span>
                    <img src={icon} alt="icon" />
                  </span>
                  {title}
                </Link>
              </li>
            ))}
          </CategoryList>

          <Divider />
        </Fragment>
      ))}

      <button onClick={() => logout()}>
        <img src="/icons/logout.svg" alt="log out icon" />
        Log Out
      </button>
    </StyledNavigation>
  );
};
