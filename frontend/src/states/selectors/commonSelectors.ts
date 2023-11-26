import { selector } from "recoil";
import { modalState } from "../atoms/commonAtoms";

export const modalPayload = selector({
  key: "modalPayload",
  get: ({ get }) => {
    const modalOpenState = get(modalState);
    const newModalState = !modalOpenState;
    return newModalState;
  },
});
