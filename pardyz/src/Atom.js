import { recoilPersist } from "recoil-persist";
import { atom } from "recoil";

const { persistAtom } = recoilPersist();

// export const loginCheck = atom({
//     key: "loginState",
//     default: false,
//     effects_UNSTABLE: [persistAtom],
//   });

export const firstState = atom({
  key: "firstState",
  defualt: "",
  effects_UNSTABLE: [persistAtom],
});

export const secondState = atom({
  key: "secondState",
  defualt: "",
  effects_UNSTABLE: [persistAtom],
});

export const thirdState = atom({
  key: "thirdState",
  defualt: "",
  effects_UNSTABLE: [persistAtom],
});

export const fourthState = atom({
  key: "fourthState",
  defualt: "",
  effects_UNSTABLE: [persistAtom],
});
