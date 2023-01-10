import { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { signInWithEmailAndPassword } from "firebase/auth";

import { ButtonForm, InputForm } from "../../Helpers";
import { FirebaseAuth } from "../../firebase/config";
import { formValidationsLoginProf } from "../../AuthUser/helpers/validator";
import { useForm } from "../../hooks/useForm";

import styles from "./loginProf.module.css";

export const LoginProf = () => {
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
    formValidationsLoginProf
  );

  const onSubmitLoginProf = async () => {
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
          <h2>Login Profesional</h2>
        </div>

        <div className={styles.form}>
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

          <ButtonForm
            disabled={isLoadingForm}
            title={isLoadingForm ? "Cargando..." : "Ingresar"}
            onSubmit={onSubmitLoginProf}
          />
        </div>

        {!!errorMessage && <p className={styles.show_error}>{errorMessage}</p>}

        <Link to="/auth-prof/recoverAccount" className={styles.forgot_password}>
          <h5>¿Olvidaste tu contraseña?</h5>
        </Link>

        <div className={styles.redirect_register}>
          <p>
            ¿No tienes cuenta? <Link to="/auth-prof/register">Registrate</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
