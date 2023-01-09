import { HtmlHTMLAttributes } from "react";
import { Container } from "./styled";

interface IUserInitials {
  firstName: string | undefined;
  lastName: string | undefined;
}

export interface UserInitialsProps
  extends HtmlHTMLAttributes<HTMLElement>,
    Partial<IUserInitials> {}

const userInitial = ({ firstName, lastName }: IUserInitials) => {
  if (!firstName || !lastName) return "";

  const firstNameInitial = firstName.at(0);
  const lastNameInitial = lastName.at(0);

  return `${firstNameInitial}${lastNameInitial}`;
};

const UserInitials = ({
  firstName,
  lastName,
  ...restProps
}: UserInitialsProps) => {
  return (
    <Container {...restProps}>
      <span>{userInitial({ firstName, lastName })}</span>
    </Container>
  );
};

export { UserInitials };
