import styled from "styled-components";

export const Container = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background[600]};
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;

  .menu-container p {
    align-self: flex-start;
    font-size: 1.2rem;
    transition: scale 200ms ease-in-out;

    :hover {
      cursor: pointer;
      scale: 1.05;
    }
  }

  ul {
    display: inherit;
    justify-content: inherit;
    align-items: inherit;
    flex-direction: row;
    gap: 0.5rem;
    margin: 0;
  }

  .username-container p {
    margin-right: 1rem;
    font-size: 1.4rem;
  }

  ul button {
    background-color: ${({ theme }) => theme.colors.primary[700]};
    color: ${({ theme }) => theme.colors.text[100]};
  }
`;
