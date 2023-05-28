import { RenderStringHtml } from "shared/utils/RenderHtmlToString";
import capitalize from "shared/utils/capitalize";
import { PostContainer } from "./styles";

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
    <PostContainer>
      <h3>{post.title}</h3>
      <RenderStringHtml value={post.content} />
      <p>criado em: {formatedDate}</p>
      <p>{`escrito por: ${fullName}`}</p>
    </PostContainer>
  );
};

export { Post };
