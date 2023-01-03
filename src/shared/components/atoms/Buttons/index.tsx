import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Container } from "./styled";

export interface IButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = ({ children, ...restProps }: IButton) => {
  return <Container {...restProps}>{children}</Container>;
};

export { Button };
