import styled from "styled-components";

export const Container = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.navbar};
  display: flex;
  height: 4.375rem;
  justify-content: space-between;
  padding: 0 0.5rem;

  @media screen and (min-width: 475px) {
    padding: 0 1rem;
  }

  .menu-container {
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 0;

    h1 {
      font-size: 2rem;
      transition: scale 200ms ease-in-out;
      margin: 0;

      :hover {
        cursor: pointer;
      }
    }

    svg {
      max-width: 2rem;
      max-height: 2rem;
    }
  }

  .username-container {
    margin: 0;
    p {
      margin: 0 1rem;
      font-size: 1.4rem;
    }
  }

  .navbar-offline-options,
  .navbar-online-options {
    align-items: center;
    display: flex;
    gap: 1rem;

    li:hover {
      cursor: pointer;
    }
  }

  .navbar-menu-profile {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;
