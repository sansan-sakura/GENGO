import {
  createDeckUrl,
  fetchAllDecksUrl,
  fetchDeckByIdUrl,
  fetchDecksWithQuery,
  DECK_WITH_CATEGOY_URL,
  DECK_WITH_DATE_CATEGOY_URL,
} from "../statics/fetchUrls";
import { DeckType } from "../types/flashcardTypes";

export async function getAllDecks() {
  try {
    const res = await fetch(fetchAllDecksUrl);
    const data = await res.json();
    if (!data) return console.error("something went wrong with all decks fetching 💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't get all decks");
  }
}

export async function getDecksWithQuery(query: string) {
  try {
    const res = await fetch(fetchDecksWithQuery(query));
    const data = await res.json();
    if (!data) return console.error("something went wrong with decks fetching 💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't get decks");
  }
}

export async function getDecksWithCategopry(categoryId: string, query: string) {
  try {
    const res = await fetch(DECK_WITH_CATEGOY_URL(categoryId, query));
    const data = await res.json();
    if (!data) return console.error("something went wrong with decks fetching 💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't get decks");
  }
}

export async function getDatesOfDecks(categoryId: string, query: string) {
  try {
    const res = await fetch(DECK_WITH_DATE_CATEGOY_URL(categoryId, query));
    const data = await res.json();
    if (!data) return console.error("something went wrong with deck's dates fetching 💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't get dates");
  }
}

export async function getDeck(id: number | string) {
  try {
    const res = await fetch(fetchDeckByIdUrl(id));
    const data = await res.json();
    if (!data) return console.error("something went wrong with a deck fetching 💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't get a deck");
  }
}

export async function createDeck(body: DeckType) {
  try {
    const res = await fetch(createDeckUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    if (!data) return console.error("something went wrong with a deck creating 💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't create a deck");
  }
}

export async function deleteDeck(id: number | string) {
  try {
    const res = await fetch(fetchDeckByIdUrl(id), {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data) return console.error("something went wrong with a deck deleting💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't delete a deck");
  }
}

export async function updateDeck(id: number | string, body: DeckType) {
  try {
    const res = await fetch(fetchDeckByIdUrl(id), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    if (!data) return console.error("something went wrong with a deck updating 💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't update a deck");
  }
}
