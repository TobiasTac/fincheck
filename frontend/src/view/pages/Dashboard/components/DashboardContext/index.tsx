import { createContext, useCallback, useState } from "react";

interface DashboardContextValue {
  areValuesVisible: boolean;
  isNewAccountModalOpen: boolean;
  isNewTransactionModalOpen: boolean;
  toogleValuesVisibility(): void;
  openNewAccountModal(): void;
  closeNewAccountModal(): void;
  openNewTransactionModal(): void;
  closeNewTransactionModal(): void;
}

export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(true);
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(true);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(true);

  const toogleValuesVisibility = useCallback(() => {
    setAreValuesVisible((prevState) => !prevState);
  }, []);

  const openNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(true);
  }, []);

  const closeNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(false);
  }, []);

  const openNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(true);
  }, []);

  const closeNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(false);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        areValuesVisible,
        isNewAccountModalOpen,
        isNewTransactionModalOpen,
        toogleValuesVisibility,
        openNewAccountModal,
        closeNewAccountModal,
        openNewTransactionModal,
        closeNewTransactionModal,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
