import { TOKEN_USER } from "@shared/utils/constants";
import nookie from "nookies";

export function getUserFromCookies(): UserEntity | null {
  try {
    const userFromCookies = nookie.get()[TOKEN_USER];

    return JSON.parse(userFromCookies);
  } catch (error) {
    return null;
  }
}
