"use client";

import { UnstyledButton, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import classes from "./ColorSchemeButton.module.css";

const ColorSchemeButton = () => {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <UnstyledButton className={classes.themeButton}>
      {isDarkMode ? (
        <IconMoon onClick={toggleColorScheme} />
      ) : (
        <IconSun onClick={toggleColorScheme} />
      )}
    </UnstyledButton>
  );
};

export default ColorSchemeButton;
