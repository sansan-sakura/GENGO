import { createFlashcardUrl, fetchFlashcardByIdUrl } from "../statics/fetchUrls";
import { CardType, CreateFlashCard } from "../types/flashcardTypes";
import { findToken } from "../utils/apiHelpers";

export async function getFlashCard(id: number | string) {
  const accessToken = findToken();
  if (!accessToken) return alert("Please check in first");
  try {
    const res = await fetch(fetchFlashcardByIdUrl(id), {
      method: "GET",
      headers: {
        Authorization: accessToken,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (!data) return console.error("something went wrong with a flashcard fetching 💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't get a flashcard");
  }
}

export async function createFlashCard(body: CreateFlashCard) {
  const accessToken = findToken();
  if (!accessToken) return alert("Please check in first");
  try {
    const res = await fetch(createFlashcardUrl, {
      method: "POST",
      headers: { Authorization: accessToken, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (!data) return console.error("something went wrong with a flashcard creating 💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't create a flashcard");
  }
}

export async function deleteFlashCard(id: number | string | undefined) {
  console.log(id);
  if (id === undefined) return;
  const accessToken = findToken();
  if (!accessToken) return alert("Please check in first");
  try {
    const res = await fetch(fetchFlashcardByIdUrl(id), {
      method: "DELETE",
      headers: { Authorization: accessToken },
    });
    const data = await res.json();
    console.log(data);
    if (!data) return console.error("something went wrong with a flashcard deleting💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't delete a flashcard");
  }
}

export async function updateFlashCard(id: string | undefined, body: CardType | { status: string }) {
  if (id === undefined) return;
  const accessToken = findToken();
  if (!accessToken) return alert("Please check in first");
  try {
    const res = await fetch(fetchFlashcardByIdUrl(id), {
      method: "PUT",
      headers: { Authorization: accessToken, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    if (!data) return console.error("something went wrong with a flashcard updating 💥");
    console.log(data);
    return data;
  } catch (err) {
    throw new Error("Couldn't update a flashcard");
  }
}
