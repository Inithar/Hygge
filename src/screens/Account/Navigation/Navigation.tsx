import { Fragment } from "react";
import { BiLogOut as LogOut } from "react-icons/bi";
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
            {links.map(({ title, url, Icon }) => (
              <li key={crypto.randomUUID()}>
                <Link to={url}>
                  <Icon />
                  {title}
                </Link>
              </li>
            ))}
          </CategoryList>

          <Divider />
        </Fragment>
      ))}

      <button onClick={() => logout()}>
        <LogOut />
        <span>Log Out</span>
      </button>
    </StyledNavigation>
  );
};
