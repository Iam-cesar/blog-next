import { AuthorContainer } from "./styles";

export interface AuthorProps {
  authorContent: PostEntity[];
}

const Author = ({ authorContent }: AuthorProps) => {
  return (
    <AuthorContainer>
      {authorContent?.map((content, index) => (
        <h3 key={index}>{content.title}</h3>
      ))}
    </AuthorContainer>
  );
};

export { Author };
