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

export default Post;
