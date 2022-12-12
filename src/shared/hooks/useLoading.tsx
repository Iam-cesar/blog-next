import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../components/molecules/Loading";

const useLoading = () => {
  const [loading, setLoading] = useState<boolean>();
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);

    const handleComplete = (url: string) =>
      url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return loading && <Loading />;
};

export default useLoading;
