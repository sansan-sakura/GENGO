import { ApiRes } from "./commonType";

export type CardType = {
  _id?: number | string;
  question: string;
  answer: string;
  isDone?: boolean;
  status?: string;
};

export type DeckType = {
  _id?: number | string;
  createdAt: string;
  title: string;
  cards?: Array<CardType>;
  isDone?: boolean;
  category: CategoryType;
  reviewed_date?: [Date] | [string] | string;
  last_reviewed_date?: string;
};

export type NewDeckType = {
  title: string;
  category: string;
};

export type CategoryType = {
  category: string;
  _id: string;
};

export type NewCategory = {
  category: string;
};

export type DeckDatesType = {
  id?: number | string;
  createdAt: string | Date;
  reviewed_date?: Date[] | string[] | string;
  last_reviewed_date?: Date | string;
};

export type DeckResType = ApiRes<{ deck: DeckDatesType[] }>;
