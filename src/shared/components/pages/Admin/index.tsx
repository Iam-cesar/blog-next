import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { Container } from "./styles";

const Admin = () => {
  return (
    <Container>
      <button>
        <Link href="/admin/create-post">Create</Link>
      </button>
      <button>
        <Link href="/admin/update-post">Update</Link>
      </button>
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

export default Admin;
