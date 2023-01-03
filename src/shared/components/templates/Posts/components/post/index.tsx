import capitalize from "shared/utils/capitalize";
import { Container } from "./styles";

type PostProps = {
  post: PostEntity;
};

const Post = ({ post }: PostProps) => {
  const createdAt = new Date(post.createdAt);
  const fullName = `${capitalize(post.author?.firstName)} ${capitalize(
    post.author?.lastName
  )}`;

  const formatedDate = Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(createdAt);

  return (
    <Container>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>criado em: {formatedDate}</p>
      <p>{`escrito por: ${fullName}`}</p>
    </Container>
  );
};

export { Post };
