import { atom } from "recoil";
import { CategoryType, DeckDatesType, DeckType } from "../../types/flashcardTypes";

// flash card set-> for a deck

export const currentCardState = atom<string>({
  key: "currentFlashcard",
});

export const allCardsState = {};

// for flashcard page -> all sets

export const allDecksPerPageState = atom<DeckType[] | []>({
  key: "DeckPerPage",
  default: [],
});

export const allCardDatesState = atom<DeckDatesType[] | []>({
  key: "DeckDates",
  default: undefined,
});

export const allCardsLength = atom<number>({
  key: "CardsLength",
  default: 0,
});

export const currentFlashCardPageNumState = atom<number>({
  key: "CurrentFlashCardPageNum",
  default: 1,
});

export const flashcardsNumsPerPage = atom<number>({
  key: "CardNumPerPage",
  default: 6,
});

export const categoryState = atom<CategoryType[]>({
  key: "category",
  default: [],
});
