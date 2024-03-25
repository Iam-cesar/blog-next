import { Box, Group, Skeleton } from "@mantine/core";
import { routes } from "@shared/utils/routes";
import dynamic from "next/dynamic";
import Link from "next/link";
import classes from "./TopBar.module.css";

const TopBarMobile = dynamic(() => import("../TopBarMobile/TopBarMobile"));
const TopBarUserContent = dynamic(
  () => import("../TopBarUserContent/TopBarUserContent"),
  {
    loading: () => <Skeleton w="220px" h="38px" opacity={0.4} />,
    ssr: false,
  }
);

const ColorSchemeButton = dynamic(
  () => import("../ColorSchemeButton/ColorSchemeButton"),
  {
    loading: () => <Skeleton w="44px" h="44px" opacity={0.4} />,
    ssr: false,
  }
);

const { HOME } = routes.appRoutes;

export default function TopBar() {
  return (
    <Box pb={30}>
      <nav className={classes.header}>
        <Group h="100%" w="100%" visibleFrom="sm" justify="space-between">
          <Group h="100%">
            <ColorSchemeButton />
            <Link href={HOME} className={classes.link}>
              Home
            </Link>
          </Group>

          <TopBarUserContent />
        </Group>

        <TopBarMobile />
      </nav>
    </Box>
  );
}
