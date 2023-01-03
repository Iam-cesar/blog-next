import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  display: grid;
  height: 100%;
  place-items: center;
  position: fixed;
  z-index: 9999;
  width: 100vw;
`;
