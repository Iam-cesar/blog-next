import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Write } from "shared/components/templates/Write";
import useAuth from "shared/hooks/useAuth";
import { api } from "shared/infra/services/api";

interface IEditPostProps {
  post: PostEntity;
}

const EditPost = ({ post }: IEditPostProps) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/signup");
    }
  }, [isAuthenticated, router]);

  return <Write entity={post} />;
};

const getPostById = async (paramId: string | string[]) => {
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
    revalidate: 60 * 60, // one hour
  };
};

export default EditPost;
