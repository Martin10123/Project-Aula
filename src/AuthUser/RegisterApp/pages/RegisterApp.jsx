import { Link } from "react-router-dom";

import { ButtonForm } from "../../../Helpers";
import { CountryGenderForm, NamesForm, PasswordsForm } from "../components";
import { useRegister } from "../hook/useRegister";

import styles from "../registerApp.module.css";

export const RegisterAppUser = () => {
  const { formState, onInputChange, onSubmitRegister } = useRegister();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Crear cuenta</h2>

        <form className={styles.form}>
          <NamesForm {...formState} onInputChange={onInputChange} />

          <PasswordsForm {...formState} onInputChange={onInputChange} />

          <CountryGenderForm {...formState} onInputChange={onInputChange} />

          <ButtonForm title="Registrarse" onSubmit={onSubmitRegister} />

          <p className={styles.redirect_login}>
            ¿Ya tienes una cuenta? <Link to="/auth-user/login">Ingresar</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
