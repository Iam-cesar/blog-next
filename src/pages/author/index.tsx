import { GetServerSideProps } from "next";
import nookies from "nookies";
import { Author, AuthorProps } from "shared/components/templates/Author";
import { api } from "shared/infra/services/api";

interface AuthorContextProps {
  children: React.ReactNode;
}

export const AuthorPage = ({ authorContent }: AuthorProps) => {
  return <Author authorContent={authorContent} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { "blog.token": token } = nookies.get(context);

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const getAuthorContent = async () => {
    try {
      const response = await api.get("post/by-author?take=5", {
        headers,
      });

      return response.data;
    } catch (error) {
      return [];
    }
  };

  const authorContent = await getAuthorContent();

  return {
    props: {
      authorContent,
    },
  };
};

export default AuthorPage;
