import { Deck } from "../../features/flashcards";
import { Suspense } from "react";
import { Spinner } from "../../ui/Spinner";

export const DeckPage = () => {
  return (
    <section className="section-layout">
      <Suspense fallback={<Spinner />}>
        <Deck />
      </Suspense>
    </section>
  );
};
