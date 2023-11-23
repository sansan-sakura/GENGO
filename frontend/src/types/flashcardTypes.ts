export type CardType = {
  id: number | string;
  title: string;
  question: string;
  isDone: boolean;
  status?: string;
  label?: string;
};

export type CardsType = {
  id: number | string;
  created_at: number;
  title: string;
  cards: Array<CardType>;
  idDone: boolean;
  category: string;
  reviewed_date: number;
};
