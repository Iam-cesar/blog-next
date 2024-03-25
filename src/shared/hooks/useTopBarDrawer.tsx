import { useDisclosure } from "@mantine/hooks";
import { getAuthToken } from "@shared/utils/getAuthToken";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const useTopBarDrawer = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const pathname = usePathname();
  const token = getAuthToken();

  useMemo(() => {
    closeDrawer();
  }, [pathname, token]);

  return {
    drawerOpened,
    toggleDrawer,
    closeDrawer,
  };
};

export default useTopBarDrawer;
