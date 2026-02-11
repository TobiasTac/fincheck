import { useQuery } from "@tanstack/react-query";
import { transactionsService } from "../services/transactionsService";

export function useTransactions() {
  const { data } = useQuery({
    queryKey: ['transactions'],
    queryFn: () => transactionsService.getAll({
      month: 1,
      year: 2026,
    }),
  });

  return {
    transactions: data ?? [],
  }
}
