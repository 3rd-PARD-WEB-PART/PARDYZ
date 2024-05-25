import { recoilPersist } from "recoil-persist";
import { atom } from "recoil";

const { persistAtom } = recoilPersist();

// export const loginCheck = atom({
//     key: "loginState",
//     default: false,
//     effects_UNSTABLE: [persistAtom],
//   });

export const first = atom({
  key: "firstState",
  defualt: "",
  effects_UNSTABLE: [persistAtom],
});

export const second = atom({
  key: "secondState",
  defualt: "",
  effects_UNSTABLE: [persistAtom],
});

export const third = atom({
  key: "thirdState",
  defualt: "",
  effects_UNSTABLE: [persistAtom],
});

export const fourth = atom({
  key: "fourthState",
  defualt: "",
  effects_UNSTABLE: [persistAtom],
});
