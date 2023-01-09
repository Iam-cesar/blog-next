import styled from "styled-components";
import { UserInitialsProps } from ".";

export const Container = styled.div<UserInitialsProps>`
  span {
    background-color: ${({ theme }) => theme.colors.buttonBackground};
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.buttonText};
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.5rem;
  }

  :hover {
    cursor: pointer;
  }
`;
