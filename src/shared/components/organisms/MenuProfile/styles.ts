import styled from "styled-components";

export const Container = styled.ul`
  --navbar-size: 4.375rem;

  background-color: ${({ theme }) => theme.colors.modalBackgroundColor};
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.effects.boxShadow};
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 0.5rem;
  right: 0.5rem;
  top: calc(var(--navbar-size) + 0.5rem);
  z-index: 9999;
  width: 16.5rem;

  section {
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
    margin-bottom: 0.5rem;
  }

  li {
    display: flex;
    align-items: center;
    height: calc(var(--navbar-size) / 2);
    padding-left: 0.5rem;
    opacity: 0.7;

    :hover {
      cursor: pointer;
      opacity: 1;
    }
  }

  li i {
    font-size: 1.1rem;
  }

  div {
    display: flex;
    justify-content: space-around;
    gap: 1rem;
  }
`;
