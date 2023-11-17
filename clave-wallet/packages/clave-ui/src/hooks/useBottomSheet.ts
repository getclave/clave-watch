import { useCallback, useState } from "react";

export type BottomSheetController = {
  isOpen: boolean;
  close: () => void;
  open: () => void;
};

export const useBottomSheet = (initialValue = false): BottomSheetController => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { open, close, isOpen };
};
