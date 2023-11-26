import { allCardDatesState } from "../atoms/flashcardAtoms";
import { selector } from "recoil";

export const countedCardsLength = selector({
  key: "countCardsLength",
  get: ({ get }) => {
    const allcards = get(allCardDatesState);
    const cardsLength: number | undefined = allcards.length;
    return cardsLength;
  },
});
