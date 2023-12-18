import { Suspense } from "react";
import { FlashcardsBoard } from "../../features/flashcards";
import { Spinner } from "../../ui/Spinner";

export const FlashcardPage = () => {
  return (
    <section className="section-layout">
      <Suspense fallback={<Spinner />}>
        <FlashcardsBoard />
      </Suspense>
    </section>
  );
};
