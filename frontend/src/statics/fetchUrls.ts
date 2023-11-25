const API_ROOT_URL = "http://localhost:8080/";

export const fetchFlashcardByIdUrl = (id: number | string) =>
  `${API_ROOT_URL}api/v1/flashcard/${id}`;
export const createFlashcardUrl = `${API_ROOT_URL}api/v1/flashcard`;

export const fetchDeckByIdUrl = (id: number | string) => `${API_ROOT_URL}api/v1/deck/${id}`;
export const createDeckUrl = `${API_ROOT_URL}api/v1/deck`;

export const fetchAllDecksUrl = `${API_ROOT_URL}api/v1/deck`;
export const fetchDecksWithQuery = (query: string) => `${API_ROOT_URL}api/v1/deck/${query}`;