import { atom } from "recoil";
import { CurrentUser } from "../../types/userType";

export const currentUserState = atom<CurrentUser>({
  key: "currentUser",
  default: { name: "", login: false },
});
