import Router from "next/router";
import useAuth from "shared/hooks/useAuth";

import { Container } from "./styles";

const MenuProfile = () => {
  const { logout, isAuthenticated, isAdmin, user } = useAuth();
  const adminPermition = isAdmin && isAuthenticated;

  return (
    <Container>
      <section>
        <li>
          <i>{`${user?.firstName} ${user?.lastName}`}</i>
        </li>
        <li>Profile</li>
        <li>My posts</li>
      </section>

      {adminPermition && <li onClick={() => Router.push("/admin")}>Admin</li>}

      {isAuthenticated && <li onClick={logout}>Logout</li>}
    </Container>
  );
};

export { MenuProfile };
