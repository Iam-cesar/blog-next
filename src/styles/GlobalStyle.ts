import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  border: none;
  outline: none;
}

html,
body {
  background-color: ${({ theme }) => theme.colors.background};
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.text};
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

p{
  margin: 0;
  line-height: 150%;
}

button {
  border-radius: 4px;
  font-size: 1.1rem;
  height: 2.5rem;
  transition: all 200ms ease-in-out;
  width: 100%;
  opacity: 0.9;

  :hover {
    cursor: pointer;
    opacity: 1;
  }
}

input {
  background-color: ${({ theme }) => theme.colors.inputBackgroundColor};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.effects.boxShadow};
  font-size: 1.1rem;
  height: 2rem;
  padding-left: 1rem;
}

li {
  list-style: none;
}

.main-wraper {
  padding: 0 1rem;
  max-width: 1080px;
  margin: 0 auto;
  height: 100%;
}
`;
