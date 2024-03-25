import { Box, Menu, rem } from "@mantine/core";
import AuthService from "@services/AuthService";
import useAuthContext from "@shared/hooks/useAuthContext";
import {
  IconHeart,
  IconLogout,
  IconMessage,
  IconPlayerPause,
  IconSettings,
  IconStar,
  IconSwitchHorizontal,
  IconTrash,
} from "@tabler/icons-react";
import classes from "./UserMenuOptionsItems.module.css";

const UserMenuOptionsItems = () => {
  const { logout } = AuthService();
  const { isAuthenticated } = useAuthContext();

  async function logOut() {
    await logout();
  }

  return (
    <Menu>
      <Box className={classes.link}>
        <IconHeart style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
        Liked posts
      </Box>

      <Box className={classes.link}>
        <IconStar style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
        Saved posts
      </Box>

      <Box className={classes.link}>
        <IconMessage style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
        Your comments
      </Box>

      <Box className={classes.link}>
        <IconSettings
          style={{ width: rem(16), height: rem(16) }}
          stroke={1.5}
        />
        Account settings
      </Box>

      <Box className={classes.link}>
        <IconSwitchHorizontal
          style={{ width: rem(16), height: rem(16) }}
          stroke={1.5}
        />
        Change account
      </Box>

      {isAuthenticated && (
        <Box onClick={logOut} className={classes.link}>
          <IconLogout
            style={{ width: rem(16), height: rem(16) }}
            stroke={1.5}
          />
          Logout
        </Box>
      )}

      <Menu.Divider />

      <Box className={classes.link}>
        <IconPlayerPause
          style={{ width: rem(16), height: rem(16) }}
          stroke={1.5}
        />
        Pause subscription
      </Box>

      <Box className={classes.link} color="red">
        <IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
        Delete account
      </Box>
    </Menu>
  );
};

export default UserMenuOptionsItems;
