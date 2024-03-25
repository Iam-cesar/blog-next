export type ResponseType<T> = {
  data: T | null;
  hasError: boolean;
  message?: string[];
};

export type TUserResponse = UserEntity | null;

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

export interface SaveUserOnLocalStorageProps {
  id: string;
  email: string;
  fullName: string;
}
