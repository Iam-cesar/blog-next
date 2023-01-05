import styled from "styled-components";

export const Container = styled.button<any>`
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.buttonText};
  padding: 0 0.5rem;
`;
