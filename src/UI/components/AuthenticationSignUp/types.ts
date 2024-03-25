export interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export type TNotification = {
  hasError: boolean;
  message: string[] | undefined;
};
