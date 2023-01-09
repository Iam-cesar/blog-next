import { Container } from "./styles";

export interface AuthorProps {
  authorContent: PostEntity[];
}

const Author = ({ authorContent }: AuthorProps) => {
  return (
    <Container>
      {authorContent?.map((content, index) => (
        <h3 key={index}>{content.title}</h3>
      ))}
    </Container>
  );
};

export { Author };
