import {
  createDeckUrl,
  fetchAllDecksUrl,
  fetchDeckByIdUrl,
  fetchDecksWithQuery,
  DECK_WITH_CATEGOY_URL,
  DECK_WITH_DATE_CATEGOY_URL,
} from "../statics/fetchUrls";
import { NewDeckType } from "../types/flashcardTypes";
import { findToken } from "../utils/apiHelpers";

export async function getAllDecks() {
  const accessToken = findToken();
  if (!accessToken) return alert("Please check in first");
  try {
    const res = await fetch(fetchAllDecksUrl, {
      method: "GET",
      headers: {
        Authorization: accessToken,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (!data) return console.error("something went wrong with all decks fetching 💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't get all decks");
  }
}

export async function getDecksWithQuery(query: string) {
  const accessToken = findToken();
  if (!accessToken) return alert("Please check in first");

  try {
    const res = await fetch(fetchDecksWithQuery(query), {
      method: "GET",
      headers: {
        Authorization: accessToken,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (!data) return console.error("something went wrong with decks fetching 💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't get decks");
  }
}

export async function getDecksWithCategopry(categoryId: string, query: string) {
  const accessToken = findToken();
  if (!accessToken) return alert("Please check in first");
  try {
    const res = await fetch(DECK_WITH_CATEGOY_URL(categoryId, query), {
      method: "GET",
      headers: {
        Authorization: accessToken,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (!data) return console.error("something went wrong with decks fetching 💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't get decks");
  }
}

export async function getDatesOfDecks(categoryId: string, query: string) {
  if (!categoryId) return;
  const accessToken = findToken();
  if (!accessToken) return alert("Please check in first");
  try {
    const res = await fetch(DECK_WITH_DATE_CATEGOY_URL(categoryId, query), {
      method: "GET",
      headers: {
        Authorization: accessToken,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (!data) return console.error("something went wrong with deck's dates fetching 💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't get dates");
  }
}

export async function getDeck(id: number | string | undefined) {
  if (id === undefined) return;
  const accessToken = findToken();
  if (!accessToken) return alert("Please check in first");
  try {
    const res = await fetch(fetchDeckByIdUrl(id), {
      method: "GET",
      headers: {
        Authorization: accessToken,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (!data) return console.error("something went wrong with a deck fetching 💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't get a deck");
  }
}

export async function createDeck(body: NewDeckType) {
  const accessToken = findToken();
  if (!accessToken) return alert("Please check in first");
  try {
    const res = await fetch(createDeckUrl, {
      method: "POST",
      headers: { Authorization: accessToken, "Content-Type": "application/json" },
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
  const accessToken = findToken();
  if (!accessToken) return alert("Please check in first");
  try {
    const res = await fetch(fetchDeckByIdUrl(id), {
      method: "DELETE",
      headers: { Authorization: accessToken },
    });
    const data = await res.json();
    if (!data) return console.error("something went wrong with a deck deleting💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't delete a deck");
  }
}

export async function updateDeck(id: number | string, body: NewDeckType) {
  const accessToken = findToken();
  if (!accessToken) return alert("Please check in first");
  try {
    const res = await fetch(fetchDeckByIdUrl(id), {
      method: "PUT",
      headers: { Authorization: accessToken, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    if (!data) return console.error("something went wrong with a deck updating 💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't update a deck");
  }
}
