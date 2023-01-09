import { GetServerSideProps } from "next";
import nookies from "nookies";
import { Write } from "shared/components/templates/Write";

const WritePage = () => {
  return <Write />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { "blog.token": token } = nookies.get(context);

  if (!token) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default WritePage;
