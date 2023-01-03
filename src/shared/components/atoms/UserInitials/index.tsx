import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Container } from "./styled";

interface UserInitialsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  firstName: string | undefined;
  lastName: string | undefined;
}

const userInitial = ({ firstName, lastName }: UserInitialsProps) => {
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
