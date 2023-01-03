import { useForm } from "../../../hooks/useForm";

export const useRegister = () => {
  const { formState, onInputChange } = useForm({
    name: "",
    lastname: "",
    username: "",
    phoneNumber: "",
    email: "",
    password1: "",
    password2: "",
    country: "",
    gender: "Hombre",
  });

  const onSubmitRegister = (e) => {
    e.preventDefault();

    console.log({
      ...formState,
    });
  };

  return {
    formState,
    onInputChange,
    onSubmitRegister,
  };
};
