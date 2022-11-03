import { GetServerSideProps } from "next";
import { PostEntity } from "../@types/entities";
import Home from "../shared/components/particules/Home";
import { api } from "../shared/infra/api";

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};
