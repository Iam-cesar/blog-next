import Router from "next/router";
import { Container } from "./styles";

type HomeProps = {
  posts: PostEntity[];
};
const Home = ({ posts }: HomeProps) => {
  return (
    <Container>
      {posts.map((post) => (
        <div key={post.id} onClick={() => Router.push(`/post/${post.id}`)}>
          <h2>{post.title}</h2>
          <p>{`Created at ${new Date(post.createdAt).getFullYear()}`}</p>
        </div>
      ))}
    </Container>
  );
};

export { Home };
