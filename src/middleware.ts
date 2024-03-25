import { TOKEN_ID } from "@shared/utils/constants";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const loggedUserToken = request?.cookies?.get(TOKEN_ID)?.value;

  if (loggedUserToken?.length === 0) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/:path"],
};
