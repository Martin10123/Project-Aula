import { useState } from "react";

import { addDoc, collection } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FirebaseAuth, FirebaseDB } from "../../../firebase/config";

import { formValidations } from "../../helpers/validator";
import { useForm } from "../../../hooks/useForm";

const registerData = {
  birthday: "",
  country: "Colombia",
  email: "martin@gmail.com",
  gender: "Hombre",
  displayName: "Martin Elias Simarra",
  password1: "123456789",
  password2: "123456789",
  phoneNumber: "3000000000",
  username: "Martin1234",
};

export const useRegister = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoadingForm, setIsLoadingForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { formState, onInputChange, isFormValid, formValidation } = useForm(
    registerData,
    formValidations
  );

  const onSubmitRegister = async (e) => {
    e.preventDefault();

    if (!isFormValid) return setFormSubmitted(true);
    setIsLoadingForm(true);

    try {
      const { user } = await createUserWithEmailAndPassword(
        FirebaseAuth,
        formState.email,
        formState.password1
      );

      const nameComplete = `${formState.name} ${formState.lastname}`;

      await updateProfile(FirebaseAuth.currentUser, {
        displayName: nameComplete,
      });

      delete formState.password1;
      delete formState.password2;

      await addDoc(collection(FirebaseDB, "users"), {
        ...formState,
        createAccount: new Date().getTime(),
        displayName: nameComplete,
        uid: user.uid,
      });

      setIsLoadingForm(false);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("Este usuario ya esta en uso");
      } else {
        setErrorMessage(error.message);
      }
      setIsLoadingForm(false);
    }
  };

  return {
    ...formState,
    ...formValidation,
    errorMessage,
    formState,
    formSubmitted,
    formValidation,
    isLoadingForm,
    onInputChange,
    onSubmitRegister,
  };
};
