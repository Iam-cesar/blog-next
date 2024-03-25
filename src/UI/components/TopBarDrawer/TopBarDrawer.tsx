import {
  Divider,
  Drawer,
  Group,
  ScrollArea,
  Skeleton,
  rem,
} from "@mantine/core";
import Link from "next/link";

import dynamic from "next/dynamic";
import classes from "./TopBarDrawer.module.css";

const TopBarUserContent = dynamic(
  () => import("../TopBarUserContent/TopBarUserContent"),
  {
    loading: () => <Skeleton w="220px" h="38px" opacity={0.4} />,
    ssr: false,
  }
);

const UserMenuOptionsItems = dynamic(
  () => import("../UserMenuOptionsItems/UserMenuOptionsItems")
);

interface TopBarDrawerProps {
  drawerOpened: boolean;
  closeDrawer: () => void;
}

import { routes } from "@shared/utils/routes";
const { HOME } = routes.appRoutes;

const TopBarDrawer = ({ closeDrawer, drawerOpened }: TopBarDrawerProps) => {
  return (
    <Drawer
      opened={drawerOpened}
      onClose={closeDrawer}
      size="100%"
      padding="md"
      title="Navigation"
      hiddenFrom="sm"
      zIndex={1000000}
    >
      <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
        <Group mb="sm">
          <Link href={HOME} className={classes.link}>
            Home
          </Link>
        </Group>

        <TopBarUserContent />

        <Divider my="sm" />

        <UserMenuOptionsItems />
      </ScrollArea>
    </Drawer>
  );
};

export default TopBarDrawer;
