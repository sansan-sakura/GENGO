import { Deck } from "../../features/flashcards";
import { Suspense } from "react";
import { Spinner } from "../../ui/Spinner";
import ErrorBoundary from "../../ui/ErrorBoundary";

export const DeckPage = () => {
  return (
    <section className="section-layout">
      <ErrorBoundary fallback={<p>Error</p>}>
        <Suspense fallback={<Spinner />}>
          <Deck />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
};
