const API_ROOT_URL = "http://localhost:8080/";

export const fetchFlashcardByIdUrl = (id: number | string) =>
  `${API_ROOT_URL}api/v1/flashcard/${id}`;
export const createFlashcardUrl = `${API_ROOT_URL}api/v1/flashcard`;

export const fetchDeckByIdUrl = (id: number | string) => `${API_ROOT_URL}api/v1/deck/${id}`;
export const createDeckUrl = `${API_ROOT_URL}api/v1/deck`;

export const fetchAllDecksUrl = `${API_ROOT_URL}api/v1/deck`;
export const fetchDecksWithQuery = (query: string) => `${API_ROOT_URL}api/v1/deck/${query}`;

export const DECK_WITH_CATEGOY_URL = (id: number | string, query: string) =>
  `${API_ROOT_URL}api/v1/deck/category/${id}/?${query}`;

export const DECK_WITH_DATE_CATEGOY_URL = (id: number | string, query: string) =>
  `${API_ROOT_URL}api/v1/deck/date/category/${id}/?${query}`;

export const CATEGORY_URL = `${API_ROOT_URL}api/v1/category`;

export const CATEGORY_ID_URL = (id: number | string) => `${API_ROOT_URL}api/v1/category/${id}`;

export const CREATE_USER_API = `${API_ROOT_URL}api/v1/user/signup`;
export const UPDATE_USER_API = (id: string) => `${API_ROOT_URL}api/v1/user/${id}`;
export const GET_ALL_USERS_API = `${API_ROOT_URL}api/v1/user`;
export const LOGIN_USER_API = `${API_ROOT_URL}api/v1/user/login`;
