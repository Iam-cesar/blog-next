import { Menu, Text } from "@mantine/core";
import useAuthContext from "@shared/hooks/useAuthContext";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import classes from "./UserInformation.module.css";

const UserMenuOptions = dynamic(
  () => import("../UserMenuOptions/UserMenuOptions"),
  { ssr: false }
);

const UserInformation = () => {
  const { user } = useAuthContext();

  return (
    <Suspense fallback={<></>}>
      <Menu
        withArrow
        width={300}
        position="bottom"
        transitionProps={{ transition: "pop" }}
        withinPortal
      >
        <Menu.Target>
          <div style={{ flex: 1 }} className={classes.userInfo}>
            <Text size="sm" fw={500}>
              {user?.fullName}
            </Text>

            <Text c="dimmed" size="xs">
              {user?.email}
            </Text>
          </div>
        </Menu.Target>

        <UserMenuOptions />
      </Menu>
    </Suspense>
  );
};

export default UserInformation;
