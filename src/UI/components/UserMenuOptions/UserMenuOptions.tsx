import { Avatar, Group, Menu, Text, rem } from "@mantine/core";
import useAuthContext from "@shared/hooks/useAuthContext";
import { IconChevronRight } from "@tabler/icons-react";
import dynamic from "next/dynamic";

const UserMenuOptionsItems = dynamic(
  () => import("../UserMenuOptionsItems/UserMenuOptionsItems")
);

const UserMenuOptions = () => {
  const { user } = useAuthContext();

  return (
    <Menu.Dropdown>
      <Menu.Item
        rightSection={
          <IconChevronRight
            style={{ width: rem(16), height: rem(16) }}
            stroke={1.5}
          />
        }
      >
        <Group>
          <Avatar radius="xl" src="" />

          <div>
            <Text fw={500}>{user?.fullName}</Text>
            <Text size="xs" c="dimmed">
              {user?.email}
            </Text>
          </div>
        </Group>
      </Menu.Item>

      <Menu.Divider />

      <UserMenuOptionsItems />
    </Menu.Dropdown>
  );
};

export default UserMenuOptions;
