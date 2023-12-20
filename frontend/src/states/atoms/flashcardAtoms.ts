import { atom, selector } from "recoil";
import { CardType, DeckType } from "../../types/flashcardTypes";
import { chooseColors } from "../../utils/helpers";

export const allDecksPerPageState = atom<DeckType[] | []>({
  key: "DeckPerPage",
  default: [],
});

export const currentFlashCardPageNumState = atom<number>({
  key: "CurrentFlashCardPageNum",
  default: 1,
});

export const flashcardsNumsPerPage = atom<number>({
  key: "CardNumPerPage",
  default: 6,
});

export const searchQueryCategory = atom<string>({
  key: "searchQueryCategory",
  default: "all",
});

export const searchQueryStatus = atom<string>({
  key: "searchQueryStatus",
  default: "",
});

export const searchQueryCreatedAt = atom<string>({
  key: "searchQueryCreatedAt",
  default: "",
});

export const searchQuery = atom<string>({
  key: "searchQuery",
  default: "",
});

export const currentFlashCardsState = atom<CardType[] | []>({
  key: "currentFlashcards",
  default: [],
});

export const categoriesState = atom({
  key: "categories",
  default: [],
});

export const categoryColorsState = selector({
  key: "categoryColors",
  get: ({ get }) => {
    const category = get(categoriesState);
    const colors = chooseColors(category);
    console.log(colors);
    return chooseColors(category);
  },
});
