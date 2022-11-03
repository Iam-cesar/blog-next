import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html,
body {
  background-color: ${({ theme }) => theme.colors.background[500]};
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.text[500]};
  height: 100%;
  margin: 0;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  border: none;
  outline: none;

}

button {
  border-radius: 4px;
  font-size: 1.1rem;
  height: 2.5rem;
  transition: all 200ms ease-in-out;
  width: 100%;

  :hover {
    cursor: pointer;
    scale: 1.02;
  }
}

input {
  border-radius: 4px;
  font-size: 1.1rem;
  height: 2rem;
  padding-left: 1rem;
}

li {
  list-style: none;
}
`;
