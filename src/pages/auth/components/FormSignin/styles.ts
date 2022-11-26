import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: center;
  place-items: center;
  width: 100%;

  form,
  .form-control {
    display: inherit;
    flex-direction: inherit;
  }

  input {
    margin: 0.5rem 0;
  }

  .form-control {
    margin-bottom: 1rem;
  }

  form button {
    background-color: ${({ theme }) => theme.colors.primary[800]};
    color: ${({ theme }) => theme.colors.background[100]};
    font-size: 1.1rem;
    height: 2.5rem;
    margin: 1rem 0;
    transition: all 200ms ease-in-out;
    width: 100%;

    :hover {
      cursor: pointer;
      scale: 1.02;
    }
  }
`;
