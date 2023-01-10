import { useState } from "react";
import { Link } from "react-router-dom";

import { BsArrowLeft } from "react-icons/bs";

import { ButtonForm, InputForm } from "../../Helpers";
import { useForm } from "../../hooks/useForm";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "../../firebase/config";
import { formValidationsLogin } from "../helpers/validator";

import styles from "./loginPage.module.css";

export const LoginAppUser = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoadingForm, setIsLoadingForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    email,
    emailValid,
    isFormValid,
    onInputChange,
    password,
    passwordValid,
  } = useForm(
    {
      email: "martinsimarra4@gmail.com",
      password: "123456789",
    },
    formValidationsLogin
  );

  const onSubmitLoginUser = async () => {
    if (!isFormValid) return setFormSubmitted(true);

    try {
      await signInWithEmailAndPassword(FirebaseAuth, email, password);

      setIsLoadingForm(false);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setErrorMessage("Este usuario no existe");
      } else if (error.code === "auth/wrong-password") {
        setErrorMessage("Contraseña incorrecta");
      } else {
        setErrorMessage(error.message);
      }

      setIsLoadingForm(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link to="/" className={styles.comeBack_choose}>
          <BsArrowLeft />
          <p>Regresar</p>
        </Link>

        <div className={styles.title}>
          <h2>Login App</h2>
        </div>

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

          <InputForm
            error={!!passwordValid && formSubmitted}
            helperText={passwordValid}
            nameInput="password"
            onChangeF={onInputChange}
            placeH="Contraseña..."
            type="password"
            value={password}
          />
        </form>

        <Link to="/auth-user/recoverAccount" className={styles.forgot_password}>
          <h5>¿Olvidaste tu contraseña?</h5>
        </Link>

        <div className={styles.remember_data}>
          <input type="checkbox" name="" />
          <h5>Recordar mis datos</h5>
        </div>

        <ButtonForm
          disabled={isLoadingForm}
          onSubmit={onSubmitLoginUser}
          title={isLoadingForm ? "Cargando..." : "Ingresar"}
        />

        {!!errorMessage && <p className={styles.show_error}>{errorMessage}</p>}
        <hr />

        <div className={styles.redirect_register}>
          <p>
            ¿No tienes cuenta? <Link to="/auth-user/register">Registrate</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
