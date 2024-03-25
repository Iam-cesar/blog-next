import { TUserResponse } from "@services/AuthService/types";

export type AuthContextType = {
  isAdmin: boolean;
  isAuthenticated: boolean;
  user: UserEntity | null;
  setUser: React.Dispatch<React.SetStateAction<TUserResponse>>;
};

export type SignInData = {
  email: string;
  password: string;
};

export type RefreshData = {
  accessToken: string;
};

export type SignUpData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
