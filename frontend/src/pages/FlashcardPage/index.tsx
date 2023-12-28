import { Suspense } from "react";
import { FlashcardsBoard } from "../../features/flashcards";
import { Spinner } from "../../ui/Spinner";
import ErrorBoundary from "../../ui/ErrorBoundary";

export const FlashcardPage = () => {
  return (
    <section className="section-layout">
      <ErrorBoundary fallback={<p>Error</p>}>
        <Suspense fallback={<Spinner />}>
          <FlashcardsBoard />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
};
