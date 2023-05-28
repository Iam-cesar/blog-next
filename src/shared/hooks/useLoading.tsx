import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useLoading = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) => {
      url !== router.asPath && setIsLoading(true);
    };

    const handleComplete = (url: string) => {
      url === router.asPath && setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", () => null);
      router.events.off("routeChangeComplete", () => null);
      router.events.off("routeChangeError", () => null);
    };
  }, [router.asPath, router.events, isLoading]);

  return {
    isLoading,
  };
};

export default useLoading;
