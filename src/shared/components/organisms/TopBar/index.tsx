import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "shared/components/atoms/Buttons";
import { UserInitials } from "shared/components/atoms/UserInitials";
import useAuth from "shared/hooks/useAuth";
import { MenuProfile } from "../MenuProfile";

import { Container } from "./styles";

const TopBar = () => {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const permitionsToOpenMenu = isMenuOpen && isAuthenticated;

  return (
    <Container>
      <div className="menu-container">
        <h1 onClick={() => router.push("/")}>Blogium</h1>
      </div>

      <ul>
        {isAuthenticated && (
          <div className="topbar-online-options">
            <Button btnType="secundary">
              <Link href="/write">Write</Link>
            </Button>

            <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <UserInitials
                firstName={user?.firstName}
                lastName={user?.lastName}
              />
            </div>
          </div>
        )}

        {permitionsToOpenMenu && (
          <div
            className="topbar-menu-profile"
            onClick={() => setIsMenuOpen(false)}
          >
            <MenuProfile />
          </div>
        )}

        {!isAuthenticated && (
          <div className="topbar-offline-options">
            <li onClick={() => Router.push("/auth/signin")}>Login</li>

            <li onClick={() => Router.push("/auth/signup")}>
              <Button btnType="primary">Get started!</Button>
            </li>
          </div>
        )}
      </ul>
    </Container>
  );
};

export { TopBar };

