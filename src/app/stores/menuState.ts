import { create } from "zustand";

type StoreType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void
}

const useIsOpen = create<StoreType>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set(() => ({isOpen: isOpen}))
}))

export default useIsOpen