import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";

import { ButtonForm, InputForm } from "../../Helpers";
import { FirebaseAuth } from "../../firebase/config";
import { regex } from "../../AuthUser/helpers/validator";
import { useForm } from "../../hooks/useForm";

import styles from "./recoverProfe.module.css";

const formValidationsProf = {
  email: [
    (va) => {
      if (regex.test(va) === false) {
        return true;
      } else if (!va.includes("@professional")) {
        return true;
      }
    },
    "ingresa un email valido como profesional",
  ],
};

export const RecoverAccountProf = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoadingForm, setIsLoadingForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { email, onInputChange, isFormValid, emailValid } = useForm(
    {
      email: "",
    },
    formValidationsProf
  );

  const onRecoverAccount = async (e) => {
    e.preventDefault();
    if (!isFormValid) return setFormSubmitted(true);
    setIsLoadingForm(true);

    try {
      await sendPasswordResetEmail(FirebaseAuth, email);

      setIsLoadingForm(false);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setErrorMessage("No pudimos encontrar este usuario");
      } else {
        setErrorMessage(error.message);
      }
      setIsLoadingForm(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Recuperar tu cuenta</h2>

        <InputForm
          error={!!emailValid && formSubmitted}
          helperText={emailValid}
          nameInput="email"
          onChangeF={onInputChange}
          placeH="Correo..."
          type="email"
          value={email}
        />

        <ButtonForm
          disabled={isLoadingForm}
          title={isLoadingForm ? "Cargando..." : "Recuperar"}
          onSubmit={onRecoverAccount}
        />

        {!!errorMessage && <p className={styles.show_error}>{errorMessage}</p>}

        <Link to="/auth-prof/login">Volver</Link>
      </div>
    </div>
  );
};
