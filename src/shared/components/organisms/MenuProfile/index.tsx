import Router from "next/router";
import useAuth from "shared/hooks/useAuth";

import { MenuProfileContainer } from "./styles";

const MenuProfile = () => {
  const { logout, isAuthenticated, isAdmin, user } = useAuth();
  const adminPermition = isAdmin && isAuthenticated;

  return (
    <MenuProfileContainer>
      <section>
        <li>
          <i>{`${user?.firstName} ${user?.lastName}`}</i>
        </li>
        <li>Profile</li>
        <li onClick={() => Router.push("/author")}>My content</li>
      </section>

      {adminPermition && <li onClick={() => Router.push("/admin")}>Admin</li>}

      {isAuthenticated && <li onClick={logout}>Logout</li>}
    </MenuProfileContainer>
  );
};

export { MenuProfile };
