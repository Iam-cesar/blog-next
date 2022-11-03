import React, { createContext, useEffect, useState } from "react";

import { decode } from "jsonwebtoken";
import Router from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { UserEntity } from "../@types/entities";
import { errorToast } from "../shared/components/atoms/Toast";
import { api } from "../shared/infra/api";

type AuthContextType = {
  isAdmin: boolean;
  isAuthenticated: boolean;
  signIn: (data: SignInData) => Promise<void>;
  signUp: (data: SignUpData) => Promise<void>;
  refreshToken: (data: RefreshData) => Promise<void>;
  logout: () => Promise<void>;
  user: UserEntity | null;
};

type SignInData = {
  email: string;
  password: string;
};

type RefreshData = {
  accessToken: string;
};

type SignUpData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = useState<UserEntity | null>(null);
  const isAuthenticated = !!user;
  const isAdmin = user?.role === "admin";

  const oneHour = 60 * 60 * 1;

  useEffect(() => {
    const { "blog.token": token } = parseCookies();

    if (token) {
      handleUserInformation(token);
    }
  }, []);

  async function signIn({ email, password }: SignInData) {
    try {
      const { data } = await api.post("/auth/signin", {
        email,
        password,
      });

      setCookie(null, "blog.token", data.accessToken, {
        maxAge: oneHour,
        sameSite: "strict",
        path: "/",
      });

      handleUserInformation(data.accessToken);

      Router.push("/");
    } catch (error: any) {
      errorToast(error.response.data.message);
    }
  }

  async function signUp({ firstName, lastName, email, password }: SignUpData) {
    try {
      const { data } = await api.post("/auth/signup", {
        firstName,
        lastName,
        email,
        password,
      });

      setCookie(null, "blog.token", data.accessToken, {
        maxAge: oneHour,
        sameSite: "strict",
        path: "/",
      });

      handleUserInformation(data.accessToken);

      Router.push("/");
    } catch (error: any) {
      errorToast(error.response.data.message);
    }
  }

  async function refreshToken({ accessToken }: RefreshData) {
    try {
      const { data } = await api.post("/auth/refresh", {
        accessToken,
      });

      setCookie(null, "blog.token", data.accessToken, {
        maxAge: oneHour,
        sameSite: "strict",
      });

      handleUserInformation(data.accessToken);
    } catch (error: any) {
      errorToast(error.response.data.message);
    }
  }

  async function logout() {
    try {
      await api.post("/auth/logout");

      setUser(null);

      destroyCookie(null, "blog.token", {
        path: "/",
        sameSite: "strict",
      });

      Router.push("/");
    } catch (error: any) {
      errorToast(error.response.data.message);
    }
  }

  async function handleUserInformation(token: string) {
    try {
      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      const decoded = decode(token);
      const response = await api.get(`user/${decoded?.sub}`);

      setUser(response.data);
    } catch (error: any) {
      errorToast(error.response.data.message);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAdmin,
        isAuthenticated,
        signIn,
        signUp,
        refreshToken,
        logout,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
