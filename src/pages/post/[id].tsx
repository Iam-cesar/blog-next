import { GetStaticPaths, GetStaticProps } from "next";
import { Post } from "shared/components/templates/Posts/components/Post";
import { api } from "shared/infra/services/api";

type PostProps = {
  post: PostEntity;
};

const PostPage = ({ post }: PostProps) => {
  return <Post post={post} />;
};

const getPostById = async (paramId: string | string[]) => {
  const response = await api.get(`post/${paramId}`);
  return response.data;
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params?.id) return { props: {} };

  const post = await getPostById(context.params.id);
  return {
    props: {
      post,
    },
    revalidate: 60 * 60, // one hour
  };
};

export default PostPage;
