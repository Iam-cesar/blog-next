import styled from "styled-components";

export const Container = styled.form`
  padding: 1rem 0;
`;

export const Title = styled.div`
  input {
    background-image: none;
    font-size: 2rem;
    margin-bottom: 2rem;
    min-height: 3rem;
    background-color: transparent;
    box-shadow: none;
    padding: 0;
    width: 100%;
  }
`;

export const Content = styled.div`
  --editor-height: calc(100vh - 20rem);

  background-color: transparent;
  box-shadow: none;
  font-size: 1.2rem;
  height: var(--editor-height);
  margin-bottom: 2rem;
  padding: 0;
  width: 100%;

  .quill {
    height: 95%;
    * {
      font-size: 1rem;
    }
  }
`;
