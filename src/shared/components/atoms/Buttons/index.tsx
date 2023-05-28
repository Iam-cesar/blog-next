import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styled";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnType: "primary" | "secundary" | "success";
}

const Button = ({ children, ...restProps }: IButton) => {
  return <ButtonContainer {...restProps}>{children}</ButtonContainer>;
};

export { Button };
