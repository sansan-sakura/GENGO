import { Suspense } from "react";
import { Spinner } from "../../ui/Spinner";
import { SettingsPage } from "../../features/settings";
import ErrorBoundary from "../../ui/ErrorBoundary";
import { Error } from "../../ui/Error";

export const Settings = () => {
  return (
    <section className="section-layout">
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Spinner />}>
          <SettingsPage />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
};
