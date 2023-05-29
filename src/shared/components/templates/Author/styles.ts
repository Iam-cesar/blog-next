import styled from "styled-components";

export const AuthorContainer = styled.div`
  padding: 1rem 0.625rem;

  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;

    h1 {
      :hover {
        cursor: pointer;
      }
    }

    .btn-container {
      display: flex;
      gap: 1rem;
    }

    .btn-container button {
      padding: 0 1rem;

      :last-child {
        background-color: ${({ theme }) => theme.colors.delete};
        color: #f2f2f2;
      }
    }
  }
`;
