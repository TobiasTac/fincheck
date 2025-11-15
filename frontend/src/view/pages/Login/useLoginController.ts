import { useForm } from 'react-hook-form';

type FormData = { email: string; password: string }

export function useLoginController() {
  const {
    register,
    handleSubmit: hookHandleSubmit,
  } = useForm<FormData>();

  const handleSubmit = hookHandleSubmit((data) => {
    console.log({ data })
  });

  return { handleSubmit, register };
}
