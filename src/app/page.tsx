import { Suspense } from "react";

export default async function HomePage() {
  return <Suspense fallback={<></>}></Suspense>;
}
