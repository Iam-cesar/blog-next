import { GetStaticPaths, GetStaticProps } from "next";
import { PostEntity } from "../../@types/entities";
import { api } from "../../shared/infra/api";
import { Container } from "./styles";

type PostProps = {
  post: PostEntity;
};

const Post = ({ post }: PostProps) => {
  return (
    <Container>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>{new Date(post.createdAt).toISOString()}</p>
      <p>{`Author ${post.author?.firstName} ${post.author?.lastName}`}</p>
    </Container>
  );
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

export default Post;
