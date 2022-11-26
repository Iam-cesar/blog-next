import { GetStaticPaths, GetStaticProps } from "next";
import { Container } from "./styles";

const Admin = () => {
  return <Container>Admir</Container>;
};

const createPost = (data: Partial<PostEntity>) => {};

const updatePost = (data: Partial<PostEntity>) => {};

const deletePost = (id: string) => {};

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
