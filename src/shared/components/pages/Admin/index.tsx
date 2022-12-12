import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { api } from "../../../infra/services/api";
import { errorToast } from "../../atoms/Toast";
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

const createPost = async ({ title, content }: Partial<PostEntity>) => {
  try {
    const response = await api.post("/post", { title, content });
    console.log(
      "🚀 ~ file: index.tsx ~ line 13 ~ createPost ~ response",
      response
    );
  } catch (error: any) {
    errorToast(error.response.data.message);
  }
};

const updatePost = async (
  id: string,
  { title, content, published }: Partial<PostEntity>
) => {
  try {
    const response = await api.patch(`/post/${id}`, {
      title,
      content,
      published,
    });

    console.log(
      "🚀 ~ file: index.tsx ~ line 24 ~ updatePost ~ response",
      response
    );
  } catch (error: any) {
    errorToast(error.response.data.message);
  }
};

const deletePost = async (id: string) => {
  try {
    const response = await api.delete(`/post/${id}`);
    console.log(
      "🚀 ~ file: index.tsx ~ line 45 ~ deletePost ~ response",
      response
    );
  } catch (error: any) {
    errorToast(error.response.data.message);
  }
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
