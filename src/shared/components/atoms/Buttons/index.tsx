import { ButtonHTMLAttributes } from "react";
import { Container } from "./styled";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnType: "primary" | "secundary" | "success";
}

const Button = ({ children, ...restProps }: IButton) => {
  return <Container {...restProps}>{children}</Container>;
};

export { Button };
