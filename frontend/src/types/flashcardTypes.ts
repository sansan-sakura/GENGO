import { ApiRes } from "./commonType";

export type CardType = {
  id?: number | string;
  question: string;
  answer: string;
  isDone?: boolean;
  status?: string;
};

export type DeckType = {
  id?: number | string;
  createdAt: string | Date;
  title: string;
  cards?: Array<CardType>;
  idDone?: boolean;
  category: string;
  reviewed_date?: [Date] | [string] | string;
  last_reviewed_date?: Date | string;
};

export type CategoryType = {
  category: string;
};

export type DeckDatesType = {
  id?: number | string;
  createdAt: string | Date;
  reviewed_date?: Date[] | string[] | string;
  last_reviewed_date?: Date | string;
};

export type DeckResType = ApiRes<{ deck: DeckDatesType[] }>;
