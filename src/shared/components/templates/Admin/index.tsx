import Link from "next/link";
import { Button } from "shared/components/atoms/Buttons";
import { Container } from "./styles";

const Admin = () => {
  return (
    <Container>
      <Button btnType="primary">
        <Link href="/admin/create-post">Create</Link>
      </Button>
      <Button btnType="primary">
        <Link href="/admin/update-post">Update</Link>
      </Button>
    </Container>
  );
};

export { Admin };
