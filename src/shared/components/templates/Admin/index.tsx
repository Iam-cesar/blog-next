import Link from "next/link";
import { Button } from "shared/components/atoms/Buttons";
import { AdminContainer } from "./styles";

const Admin = () => {
  return (
    <AdminContainer>
      <Button btnType="primary">
        <Link href="/admin/create-post">Create</Link>
      </Button>
      <Button btnType="primary">
        <Link href="/admin/update-post">Update</Link>
      </Button>
    </AdminContainer>
  );
};

export { Admin };
