export const PASSWORD_PATTERN =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const INVALID_PASSWORD_MESSAGE =
  "The password must contain uppercase letters, numbers and special characters.";

export const FIRST_NAME_REQUIRED = "First name field is required.";
export const LAST_NAME_REQUIRED = "Last name field is required.";
export const INVALID_EMAIL = "Please enter a valid e-mail.";
export const INVALID_TOKEN = "Invalid token.";
export const TOKEN_ID = "application.blog.token";
export const TOKEN_USER = "application.blog.user";
export const IS_SERVER_SIDE_RUNTIME_ENVIROMENT = typeof window === "undefined";
