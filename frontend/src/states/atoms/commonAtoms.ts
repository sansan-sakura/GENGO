import { atom } from "recoil";

export const modalState = atom<boolean>({
  key: "modalState",
  default: false,
});

export const modalIDstate = atom<string>({
  key: "modalId",
  default: "",
});
