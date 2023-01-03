import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { Button } from "shared/components/atoms/Buttons";
import { Container } from "./styles";

const Admin = () => {
  return (
    <Container>
      <Button>
        <Link href="/admin/create-post">Create</Link>
      </Button>
      <Button>
        <Link href="/admin/update-post">Update</Link>
      </Button>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  return {
    props: {},
  };
};

export { Admin };
