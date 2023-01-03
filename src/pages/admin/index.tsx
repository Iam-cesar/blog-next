import { decode } from "jsonwebtoken";
import { GetServerSideProps } from "next";
import nookies from "nookies";
import { Admin } from "shared/components/templates/Admin";
import { api } from "shared/infra/services/api";

const AdminPage = () => {
  return <Admin />;
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

  const decoded = decode(token);
  const { data: user } = await api.get(`/user/${decoded?.sub}`);

  if (user && user.role !== "admin") {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default AdminPage;
