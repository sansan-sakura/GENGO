import { CATEGORY_ID_URL, CATEGORY_URL } from "../statics/fetchUrls";
import { NewCategory } from "../types/flashcardTypes";
import { findToken } from "../utils/apiHelpers";

export async function getCategories() {
  const accessToken = findToken();
  console.log("token", accessToken);
  if (!accessToken) return alert("Please check in first");
  try {
    const res = await fetch(CATEGORY_URL, {
      method: "GET",
      headers: {
        Authorization: accessToken,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (!data) return console.error("something went wrong with category fetching 💥");
    return data;
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't get categories");
  }
}

export async function createCategory(body: NewCategory) {
  const accessToken = findToken();

  if (!accessToken) return alert("Please check in first");
  try {
    const res = await fetch(CATEGORY_URL, {
      method: "POST",
      headers: { Authorization: accessToken, "Content-Type": "application/json" },
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
  const accessToken = findToken();
  if (!accessToken) return alert("Please check in first");
  try {
    const res = await fetch(CATEGORY_ID_URL(id), {
      method: "DELETE",
      headers: { Authorization: accessToken },
    });
    const data = await res.json();
    if (!data) return console.error("something went wrong with a category deleting💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't delete a category");
  }
}

export async function updateCategory(id: number | string, body: { category: string }) {
  const accessToken = findToken();
  if (!accessToken) return alert("Please check in first");
  try {
    const res = await fetch(CATEGORY_ID_URL(id), {
      method: "PUT",
      headers: { Authorization: accessToken, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    if (!data) return console.error("something went wrong with a category updating 💥");
    return data;
  } catch (err) {
    throw new Error("Couldn't update a category");
  }
}
