import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import z from "zod";
import type { Transaction } from "../../../../../app/entities/Transaction";
import { useBankAccounts } from "../../../../../app/hooks/useBankAccounts";
import { useCategories } from "../../../../../app/hooks/useCategories";
import { transactionsService } from "../../../../../app/services/transactionsService";

const schema = z.object({
  value: z.union([
    z.string().nonempty('Informe o valor'),
    z.number(),
  ]),
  name: z.string().nonempty('Informe o nome'),
  categoryId: z.string().nonempty('Informe a categoria'),
  bankAccountId: z.string().nonempty('Informe a conta'),
  date: z.date(),
});

type FormData = z.infer<typeof schema>;

export function useEditTransactionModalController(
  transaction: Transaction | null,
  onClose: () => void,
) {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      bankAccountId: transaction?.bankAccountId,
      categoryId: transaction?.categoryId,
      name: transaction?.name,
      value: transaction?.value,
      date: transaction ? new Date(transaction.date) : new Date(),
    }
  });

  const { accounts } = useBankAccounts();
  const { categories: categoriesList } = useCategories();
  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useMutation(transactionsService.update);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleSubmit = hookFormSubmit(async data => {
    try {
      await mutateAsync({
        ...data,
        id: transaction!.id,
        type: transaction!.type,
        value: Number(data.value),
        date: data.date.toISOString(),
      });

      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      toast.success(
        transaction!.type === 'EXPENSE'
          ? 'Despesa editada com sucesso!'
          : 'Receita editada com sucesso!'
      );
      onClose();
    } catch {
      toast.error(
        transaction!.type  === 'EXPENSE'
          ? 'Erro ao salvar despesa!'
          : 'Erro ao salvar receita!'
      )
    }
  });

  const categories = useMemo(() => {
    return categoriesList.filter(category => category.type === transaction?.type);
  }, [categoriesList, transaction]);

  function handleDeleteTransaction() {

  }

  function handleOpenDeleteModal() {
    setIsDeleteModalOpen(true);
  }
  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  return {
    register,
    errors,
    control,
    handleSubmit,
    accounts,
    categories,
    isPending,
    isDeleteModalOpen,
    isLoadingDelete: false,
    handleDeleteTransaction,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
  };
}
