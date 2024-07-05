import { create } from "zustand";

type StoreType = {
  isClicked: boolean;
  setIsClicked: (isClicked: boolean) => void
}

const useIsClicked = create<StoreType>((set) => ({
  isClicked: false,
  setIsClicked: (isClicked) => set(() => ({isClicked: isClicked}))
}))

export default useIsClicked