import { Button, Group } from "@mantine/core";
import { routes } from "@shared/utils/routes";
import Link from "next/link";
import { Suspense } from "react";
import classes from "./TopBarLoginButtons.module.css";
const { LOGIN, SIGN_UP } = routes.appRoutes;

const TopBarLoginButtons = () => {
  return (
    <Suspense fallback={<></>}>
      <Group px="sm" w="100%">
        <div className={classes.displayFlex}>
          <Link href={LOGIN} className={classes.linkDefault}>
            <Button fullWidth variant="default">
              Log in
            </Button>
          </Link>

          <Link href={SIGN_UP} className={classes.linkDefault}>
            <Button fullWidth>Sign up</Button>
          </Link>
        </div>
      </Group>
    </Suspense>
  );
};

export default TopBarLoginButtons;
