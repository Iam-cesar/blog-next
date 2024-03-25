import { TUserResponse } from "@services/AuthService/types";
import { getUserFromCookies } from "@shared/utils/getUserFromCookies";
import React, { createContext, useState } from "react";
import { AuthContextType } from "./types";

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = useState<TUserResponse>(() => {
    try {
      const userFromCookies = getUserFromCookies();
      return userFromCookies ?? null;
    } catch (error) {
      console.log("🚀 ~ error:", error);
      return null;
    }
  });

  const isAuthenticated = !!user;
  const isAdmin = user?.role === "admin";

  return (
    <AuthContext.Provider
      value={{
        isAdmin,
        isAuthenticated,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
