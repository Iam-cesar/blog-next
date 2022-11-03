import Link from "next/link";
import Router from "next/router";
import useAuth from "../../../hooks/useAuth";
import { Container } from "./styles";

const Navbar = () => {
  const { logout, user, isAuthenticated, isAdmin } = useAuth();

  const adminPermition = isAdmin && isAuthenticated;

  return (
    <Container>
      <h1>Blog do Augusto</h1>
      <div className="menu-container">
        <p onClick={() => Router.push("/")}>Home</p>
      </div>

      <ul>
        {isAuthenticated && (
          <div className="username-container">
            <p>{`${user?.firstName} ${user?.lastName}`}</p>
          </div>
        )}

        <li>
          {adminPermition && (
            <Link href="/admin">
              <button>Admin</button>
            </Link>
          )}
        </li>

        <li>
          {!isAuthenticated && (
            <Link href="/auth/signin">
              <button>Login</button>
            </Link>
          )}
        </li>

        <li>{isAuthenticated && <button onClick={logout}>Logout</button>}</li>
      </ul>
    </Container>
  );
};

export default Navbar;
