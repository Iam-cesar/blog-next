import { TOKEN_ID } from "@shared/utils/constants";
import nookie from "nookies";

export function getAuthToken(): string | null {
  try {
    const authToken = nookie.get()[TOKEN_ID];
    return authToken ?? null;
  } catch (error) {
    return null;
  }
}
