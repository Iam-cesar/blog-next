import { Avatar, Group, UnstyledButton } from "@mantine/core";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import classes from "./UserButton.module.css";

const UserInformation = dynamic(
  () => import("../UserInformation/UserInformation"),
  {
    ssr: false,
  }
);

export default function UserButton() {
  return (
    <Suspense fallback={<></>}>
      <UnstyledButton className={classes.user}>
        <Group mr="lg">
          <Avatar src="" radius="xl" />

          <UserInformation />
        </Group>
      </UnstyledButton>
    </Suspense>
  );
}
