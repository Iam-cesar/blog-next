import styled from "styled-components";
import { IButton } from ".";

export const Container = styled.button<IButton>`
  background-color: ${({ btnType, theme }) => {
    const types = {
      primary: theme.colors.buttonBackground,
      secundary: "transparent",
      success: "#0f730c",
    };
    return types[btnType];
  }};

  color: ${({ btnType, theme }) => {
    const types = {
      primary: theme.colors.buttonText,
      secundary: theme.colors.text,
      success: theme.colors.background,
    };

    return types[btnType];
  }};

  :disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
  }

  padding: 0 0.5rem;
`;
