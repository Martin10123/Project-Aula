import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { formValidationsProf } from "../../../AuthUser/helpers/validator";
import { FirebaseAuth, FirebaseDB } from "../../../firebase/config";
import { useForm } from "../../../hooks/useForm";

const formDataRegister = {
  birthday: "",
  country: "Colombia",
  displayName: "Martin Simarra",
  email: "martin@gmail.com",
  gender: "Hombre",
  nickName: "hola1234",
  password1: "123456789",
  password2: "123456789",
  phoneNumber: "3000000000",
};

export const useRegisterProf = () => {
  const [daysValue, setDaysValue] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoadingForm, setIsLoadingForm] = useState(false);
  const [openOptionsDays, setOpenOptionsDays] = useState(false);
  const [openOptionsProfession, setOpenOptionsProfession] = useState(false);
  const [professionValue, setprofessionValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { formState, formValidation, isFormValid, onInputChange } = useForm(
    formDataRegister,
    formValidationsProf
  );

  const handleChangeFilter = (type, value) => {
    if (type === "profession") {
      setprofessionValue(value);
      setOpenOptionsProfession(false);
    } else {
      if (daysValue.includes(value)) {
        setDaysValue(daysValue.filter((dayBefore) => dayBefore !== value));
      } else {
        setDaysValue([...daysValue, value]);
      }
    }
  };

  const onSubmitForm = async () => {
    if (!isFormValid || professionValue === "" || daysValue.length === 0) {
      return setFormSubmitted(true);
    }

    setIsLoadingForm(true);

    try {
      const { user } = await createUserWithEmailAndPassword(
        FirebaseAuth,
        formState.email,
        formState.password1
      );

      await updateProfile(FirebaseAuth.currentUser, {
        displayName: formState.displayName,
      });

      delete formState.password1;
      delete formState.password2;

      await addDoc(collection(FirebaseDB, "profesionalsUsers"), {
        ...formState,
        uid: user.uid,
        createAccount: new Date().getTime(),
        daysValue,
        professionValue,
      });

      setIsLoadingForm(false);
    } catch (error) {
      console.log(error);
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("Este email ya esta en uso");
      } else {
        setErrorMessage(error.message);
      }
      setIsLoadingForm(false);
    }
  };

  return {
    ...formState,
    ...formValidation,
    daysValue,
    errorMessage,
    formState,
    formSubmitted,
    formValidation,
    handleChangeFilter,
    isFormValid,
    isLoadingForm,
    onInputChange,
    onSubmitForm,
    openOptionsDays,
    openOptionsProfession,
    professionValue,
    setDaysValue,
    setErrorMessage,
    setOpenOptionsDays,
    setOpenOptionsProfession,
    setprofessionValue,
  };
};
