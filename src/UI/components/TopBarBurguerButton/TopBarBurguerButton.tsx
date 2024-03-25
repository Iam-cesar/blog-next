import { Burger } from "@mantine/core";

interface TopBarBurguerButtonProps {
  drawerOpened: boolean;
  toggleDrawer: () => void;
}

const TopBarBurguerButton = ({
  drawerOpened,
  toggleDrawer,
}: TopBarBurguerButtonProps) => {
  return (
    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
  );
};

export default TopBarBurguerButton;
