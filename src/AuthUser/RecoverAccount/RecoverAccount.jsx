import { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonForm, InputForm } from "../../Helpers";
import { useForm } from "../../hooks/useForm";
import { regex } from "../helpers/validator";

import styles from "./recoverAccount.module.css";

export const formValidations = {
  email: [(va) => regex.test(va) === false, "ingresa un email valido"],
};

export const RecoverAccount = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoadingForm, setIsLoadingForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { email, onInputChange, isFormValid, emailValid } = useForm(
    {
      email: "martinsimarra4@gmail.com",
    },
    formValidations
  );

  const onRecoverAccount = (e) => {
    e.preventDefault();
    if (!isFormValid) return setFormSubmitted(true);
    setIsLoadingForm(true);

    try {
      console.log("si");
    } catch (error) {
      console.log(error);
      setIsLoadingForm(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Recuperar cuenta</h2>

        <form className={styles.form}>
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
            onSubmit={onRecoverAccount}
            title="Recuperar"
          />
        </form>

        <Link to="/auth-user/login" className={styles.login}>
          Ya tengo una cuenta
        </Link>
        <br />
        <Link to="/auth-user/register" className={styles.register}>
          Crear una cuenta
        </Link>
      </div>
    </div>
  );
};
