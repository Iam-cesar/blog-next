"use client";

import { Group } from "@mantine/core";
import useAuthContext from "@shared/hooks/useAuthContext";
import dynamic from "next/dynamic";

const TopBarLoginButtons = dynamic(
  () => import("../TopBarLoginButtons/TopBarLoginButtons"),
  { ssr: false }
);

const UserButton = dynamic(() => import("../UserButton/UserButton"), {
  ssr: false,
});

const TopBarUserContent = () => {
  const { isAuthenticated } = useAuthContext();

  return (
    <Group>{isAuthenticated ? <UserButton /> : <TopBarLoginButtons />}</Group>
  );
};

export default TopBarUserContent;
