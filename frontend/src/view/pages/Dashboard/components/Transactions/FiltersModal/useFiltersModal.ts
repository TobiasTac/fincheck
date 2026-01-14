import { useState } from "react";

export function useFiltersModal() {
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<null | string>(null);

  function handleSelectBankAccount(bankAccountId: string) {
    setSelectedBankAccountId(prevState => (
      prevState === bankAccountId
        ? null
        : bankAccountId
    ));
  }

  return {
    handleSelectBankAccount,
    selectedBankAccountId,
  };
}
