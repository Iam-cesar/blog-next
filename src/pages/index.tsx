import { GetServerSideProps } from "next";
import { Home } from "../shared/components/templates/Home";
import { api } from "../shared/infra/services/api";

type HomeProps = {
  posts: PostEntity[];
};

export default function HomePage({ posts }: HomeProps) {
  return <Home posts={posts} />;
}

const getPosts = async () => {
  const response = await api.get("post");
  return response.data;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};
