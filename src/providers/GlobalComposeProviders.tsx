import { ReactNode } from "react";
import { TProviders } from "./AppProvider";

interface IChildrenProps {
  children: ReactNode;
}

export const globalComposeProviders = (providers: TProviders) => {
  return ({ children }: IChildrenProps) =>
    providers.reduceRight(
      (child, [Provider, props = {}]) => (
        <Provider {...props}>{child}</Provider>
      ),
      children
    );
};
