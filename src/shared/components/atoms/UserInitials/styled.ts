import styled from "styled-components";

export const Container = styled.div`
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
