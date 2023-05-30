import { GetStaticPaths, GetStaticProps } from "next";
import { Write } from "shared/components/templates/Write";
import { api } from "shared/infra/services/api";

interface IEditPostProps {
  post: PostEntity;
}

const EditPost = ({ post }: IEditPostProps) => {
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
  };
};

export default EditPost;
