"use client";

import { Group } from "@mantine/core";
import useTopBarDrawer from "@shared/hooks/useTopBarDrawer";
import dynamic from "next/dynamic";
import TopBarBurguerButton from "../TopBarBurguerButton/TopBarBurguerButton";

const TopBarDrawer = dynamic(() => import("../TopBarDrawer/TopBarDrawer"));

const MobileTopBar = () => {
  const { closeDrawer, drawerOpened, toggleDrawer } = useTopBarDrawer();

  return (
    <Group>
      <TopBarBurguerButton
        drawerOpened={drawerOpened}
        toggleDrawer={toggleDrawer}
      />
      <TopBarDrawer closeDrawer={closeDrawer} drawerOpened={drawerOpened} />
    </Group>
  );
};

export default MobileTopBar;
