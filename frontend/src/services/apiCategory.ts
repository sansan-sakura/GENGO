import { CATEGORY_ID_URL, CATEGORY_URL } from "../statics/fetchUrls";
import { NewCategory } from "../types/flashcardTypes";

export async function getCategories() {
  try {
    const res = await fetch(CATEGORY_URL);
    const data = await res.json();
    if (!data) return console.error("something went wrong with category fetching 💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't get categories");
  }
}

export async function createCategory(body: NewCategory) {
  try {
    const res = await fetch(CATEGORY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    if (!data) return console.error("something went wrong with a category creating 💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't create a category");
  }
}

export async function deleteCategory(id: number | string) {
  try {
    const res = await fetch(CATEGORY_ID_URL(id), {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data) return console.error("something went wrong with a category deleting💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't delete a category");
  }
}

export async function updateCategory(id: number | string, body: { category: string }) {
  try {
    const res = await fetch(CATEGORY_ID_URL(id), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    if (!data) return console.error("something went wrong with a category updating 💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't update a category");
  }
}
