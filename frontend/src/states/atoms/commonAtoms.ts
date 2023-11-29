import { atom } from "recoil";

export const modalState = atom<boolean>({
  key: "modalState",
  default: false,
});

export const subModalState = atom<boolean>({
  key: "subModalState",
  default: false,
});
