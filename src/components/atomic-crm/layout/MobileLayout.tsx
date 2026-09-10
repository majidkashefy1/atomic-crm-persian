import { Error } from "@/components/admin/error";
import { Notification } from "@/components/admin/notification";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense, type ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { useConfigurationLoader } from "../root/useConfigurationLoader";
import { useLocaleDirection } from "../root/useLocaleDirection";
import { MobileNavigation } from "./MobileNavigation";
import { PullToRefresh } from "./PullToRefresh";

export const MobileLayout = ({ children }: { children: ReactNode }) => {
  useConfigurationLoader();
  useLocaleDirection();
  return (
    <>
      <PullToRefresh />
      <ErrorBoundary FallbackComponent={Error}>
        <Suspense fallback={<Skeleton className="h-12 w-12 rounded-full" />}>
          {children}
        </Suspense>
      </ErrorBoundary>
      <MobileNavigation />
      <Notification mobileOffset={{ bottom: "72px" }} />
    </>
  );
};
