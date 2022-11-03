import { GetServerSideProps } from "next";
import nookies from "nookies";

const Admin = () => {
  return <></>;
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

export default Admin;
