import {
  RefreshData,
  SignInData,
  SignUpData,
} from "@contexts/AuthContext/types";
import useAuthContext from "@shared/hooks/useAuthContext";
import { api } from "@shared/infra/services/api";
import { TOKEN_ID, TOKEN_USER } from "@shared/utils/constants";
import { getUserFromCookies } from "@shared/utils/getUserFromCookies";
import { routes } from "@shared/utils/routes";
import { decode } from "jsonwebtoken";
import { destroyCookie, setCookie } from "nookies";
import { useState } from "react";
import { ResponseType, SaveUserOnLocalStorageProps } from "./types";

const { USER } = routes.userRoutes;
const { HOME } = routes.appRoutes;
const { AUTH_SIGN, AUTH_SIGN_UP, AUTH_REFRESH, AUTH_LOGOUT } =
  routes.authenticationRoutes;

const ONE_DAY = 60 * 60 * 24;

const AuthService = () => {
  const { setUser } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  async function getUserFromApi(id: string) {
    try {
      const { data: user } = await api.get<UserEntity>(id);
      return user?.id ? user : null;
    } catch (error) {
      return null;
    }
  }

  async function signIn({
    email,
    password,
  }: SignInData): Promise<ResponseType<UserEntity>> {
    try {
      setIsLoading(true);

      const { data } = await api.post(AUTH_SIGN, {
        email,
        password,
      });

      setCookie(null, TOKEN_ID, data?.accessToken, {
        maxAge: ONE_DAY,
        sameSite: "strict",
        path: HOME,
      });

      await handleUserInformation(data?.accessToken);

      return { data, hasError: false };
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message;
      const message = Array.isArray(errorMessage)
        ? errorMessage
        : [errorMessage];

      return {
        data: null,
        hasError: true,
        message,
      };
    } finally {
      setIsLoading(false);
    }
  }

  async function signUp({
    firstName,
    lastName,
    email,
    password,
  }: SignUpData): Promise<ResponseType<UserEntity>> {
    try {
      setIsLoading(true);

      const { data } = await api.post(AUTH_SIGN_UP, {
        firstName,
        lastName,
        email,
        password,
      });

      setCookie(null, TOKEN_ID, data?.accessToken, {
        maxAge: ONE_DAY,
        sameSite: "strict",
        path: HOME,
      });

      await handleUserInformation(data?.accessToken);

      return { data, hasError: false };
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message;
      const message = Array.isArray(errorMessage)
        ? errorMessage
        : [errorMessage];

      return {
        data: null,
        hasError: true,
        message,
      };
    } finally {
      setIsLoading(false);
    }
  }

  async function refreshToken({
    accessToken,
  }: RefreshData): Promise<ResponseType<UserEntity>> {
    try {
      setIsLoading(true);

      const { data } = await api.post(AUTH_REFRESH, {
        accessToken,
      });

      setCookie(null, TOKEN_ID, data?.accessToken, {
        maxAge: ONE_DAY,
        sameSite: "strict",
      });

      await handleUserInformation(data?.accessToken);

      return { data, hasError: false };
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message;
      const message = Array.isArray(errorMessage)
        ? errorMessage
        : [errorMessage];

      return {
        data: null,
        hasError: true,
        message,
      };
    } finally {
      setIsLoading(false);
    }
  }

  async function logout(): Promise<ResponseType<UserEntity>> {
    try {
      setIsLoading(true);

      await api.post(`${AUTH_LOGOUT}`);

      destroyCookie(null, TOKEN_ID, {
        path: HOME,
        sameSite: "strict",
      });

      destroyCookie(null, TOKEN_USER, {
        path: HOME,
        sameSite: "strict",
      });

      setUser(null);

      return { data: null, hasError: false };
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message;
      const message = Array.isArray(errorMessage)
        ? errorMessage
        : [errorMessage];

      return {
        data: null,
        hasError: true,
        message,
      };
    } finally {
      setIsLoading(false);
    }
  }

  function saveUserOnLocalStorage(
    user: SaveUserOnLocalStorageProps
  ): UserEntity | boolean {
    try {
      setCookie(null, TOKEN_USER, JSON.stringify(user), {
        maxAge: ONE_DAY,
        sameSite: "strict",
        path: HOME,
      });

      return true;
    } catch (error) {
      return false;
    }
  }

  async function handleUserInformation(token: string) {
    try {
      const userFromCookies = getUserFromCookies();

      if (userFromCookies?.id) return userFromCookies;

      const decoded = decode(token);

      const { data: userFromApi } = await api.get<UserEntity>(
        `${USER}/${decoded?.sub}`
      );

      const fullName = `${userFromApi?.firstName} ${userFromApi?.lastName}`;

      setUser(() => {
        const userWithFullName = { ...userFromApi, fullName };
        const { email, id } = userWithFullName;
        saveUserOnLocalStorage({ email, fullName, id });
        return userWithFullName;
      });
    } catch (error: any) {
      return { data: null, hasError: true, error };
    }
  }

  return {
    signIn,
    signUp,
    logout,

    getUserFromApi,
    handleUserInformation,

    refreshToken,

    isLoading,
  };
};

export default AuthService;
