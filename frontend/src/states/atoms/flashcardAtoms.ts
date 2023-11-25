import { atom } from "recoil";

// flash card set-> for a deck

export const currentCardState = atom<string>({
  key: "currentFlashcard",
});

export const allCardsState = {};

// for flashcard page -> all sets

export const allCardSetsPerPageState = {};
