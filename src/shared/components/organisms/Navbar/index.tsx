import Router from "next/router";
import { useState } from "react";
import { Button } from "shared/components/atoms/Buttons";
import { UserInitials } from "shared/components/atoms/UserInitials";
import useAuth from "shared/hooks/useAuth";
import { MenuProfile } from "../MenuProfile";
import Logo from "./assets/icon/Logo";

import { Container } from "./styles";

const Navbar = () => {
  const { user, isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const permitionsToOpenMenu = isMenuOpen && isAuthenticated;

  return (
    <Container>
      <div className="menu-container">
        <Logo />
        <h1 onClick={() => Router.push("/")}>Blogium</h1>
      </div>

      <ul>
        {isAuthenticated && (
          <div>
            <UserInitials
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              firstName={user?.firstName}
              lastName={user?.lastName}
            />
          </div>
        )}

        {permitionsToOpenMenu && <MenuProfile />}

        {!isAuthenticated && (
          <div className="navbar-offline-options">
            <li onClick={() => Router.push("/auth/signin")}>Login</li>

            <li onClick={() => Router.push("/auth/signup")}>
              <Button>Get started!</Button>
            </li>
          </div>
        )}
      </ul>
    </Container>
  );
};

export { Navbar };
