import DynamicComponent from "@/components/DynamicComponent";
import StaticComponents from "@/components/StaticComponents";
import { Suspense } from "react";

export const experimental_ppr = true;

export default async function Home() {

  return (
    <div className="container mx-auto">
      {/* <Suspense fallback={<p>ローディング</p>}> */}
        <StaticComponents />
      {/* </Suspense> */}
      <Suspense fallback={<p>ローディング</p>}>
        <DynamicComponent />
      </Suspense>
    </div>
  );
}
