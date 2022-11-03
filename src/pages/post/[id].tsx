import { GetStaticPaths, GetStaticProps } from "next";
import { PostEntity } from "../../@types/entities";
import Post from "../../shared/components/molecules/post";
import { api } from "../../shared/infra/api";

type PostProps = {
  post: PostEntity;
};

const PostPage = ({ post }: PostProps) => {
  return <Post post={post} />;
};

const getPostById = async (paramId: string | string[]) => {
  if (Array.isArray(paramId)) {
    const [id] = paramId;
    const response = await api.get(`post/${id}`);
    return response.data;
  }

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
  };
};

export default PostPage;
