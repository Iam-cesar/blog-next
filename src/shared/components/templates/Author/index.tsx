import { NextRouter, useRouter } from "next/router";
import { api } from "shared/infra/services/api";
import { AuthorContainer } from "./styles";

export interface AuthorProps {
  authorContent: PostEntity[];
}

const deletePost = async (id: string, router: NextRouter) => {
  try {
    if (id) {
      await api.delete(`post/${id}`);
    }

    router.push("/");
  } catch (error) {
    console.log("🚀 ~ file: index.tsx:14 ~ deletePost ~ error:", error);
  }
};

const Author = ({ authorContent }: AuthorProps) => {
  const router = useRouter();

  return (
    <AuthorContainer>
      {authorContent?.map((content, index) => (
        <div key={index}>
          <h3>{content.title}</h3>

          <div className="btn-container">
            <button
              onClick={() => router.push(`/post/edit-post/${content.id}`)}
            >
              EDITAR
            </button>
            <button onClick={() => deletePost(content.id, router)}>
              EXCLUIR
            </button>
          </div>
        </div>
      ))}
    </AuthorContainer>
  );
};

export { Author };
