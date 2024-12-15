import { Suspense, type FC, type ReactNode } from "react";
import { Spinner } from "../Spinner/Spinner";

type AppSuspenseProps = {
  children: ReactNode;
};

export const AppSuspense: FC<AppSuspenseProps> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>;
};
