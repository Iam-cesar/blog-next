"use client";

import { AuthProvider } from "../contexts/AuthContext";
import { globalComposeProviders } from "./GlobalComposeProviders";

export type TProviders = typeof providers;

const providers = [[AuthProvider]];

export const AppProvider = globalComposeProviders(providers);
