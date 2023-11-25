import { createFlashcardUrl, fetchFlashcardByIdUrl } from "../statics/fetchUrls";
import { CardType } from "../types/flashcardTypes";

export async function getFlashCard(id: number | string) {
  try {
    const res = await fetch(fetchFlashcardByIdUrl(id));
    const data = await res.json();
    if (!data) return console.error("something went wrong with a flashcard fetching 💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't get a flashcard");
  }
}

export async function createFlashCard(body: CardType) {
  try {
    const res = await fetch(createFlashcardUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    if (!data) return console.error("something went wrong with a flashcard creating 💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't create a flashcard");
  }
}

export async function deleteFlashCard(id: number | string) {
  try {
    const res = await fetch(fetchFlashcardByIdUrl(id), {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data) return console.error("something went wrong with a flashcard deleting💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't delete a flashcard");
  }
}

export async function updateFlashCard(id: number | string, body: CardType) {
  try {
    const res = await fetch(fetchFlashcardByIdUrl(id), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    if (!data) return console.error("something went wrong with a flashcard updating 💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't update a flashcard");
  }
}
