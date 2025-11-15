import { useForm } from 'react-hook-form';

export function useLoginController() {
  const {
    register,
    handleSubmit: hookHandleSubmit,
  } = useForm();

  const handleSubmit = hookHandleSubmit((data) => {
    console.log({ data })
  });

  return { handleSubmit, register };
}
