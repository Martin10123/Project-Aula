import { Link } from "react-router-dom";

import { ButtonForm } from "../../../Helpers";
import { CountryGenderForm, NamesForm, PasswordsForm } from "../components";
import { useRegister } from "../hook/useRegister";

import styles from "../registerApp.module.css";

export const RegisterAppUser = () => {
  const {
    errorMessage,
    formState,
    formSubmitted,
    formValidation,
    isLoadingForm,
    onInputChange,
    onSubmitRegister,
  } = useRegister();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Crear cuenta</h2>

        <form className={styles.form}>
          <NamesForm
            formState={formState}
            formValidation={formValidation}
            formSubmitted={formSubmitted}
            onInputChange={onInputChange}
          />

          <PasswordsForm
            formState={formState}
            formValidation={formValidation}
            formSubmitted={formSubmitted}
            onInputChange={onInputChange}
          />

          <CountryGenderForm
            formState={formState}
            formValidation={formValidation}
            formSubmitted={formSubmitted}
            onInputChange={onInputChange}
          />

          <ButtonForm
            disabled={isLoadingForm}
            title="Registrarse"
            onSubmit={onSubmitRegister}
          />

          {!!errorMessage && (
            <p className={styles.show_error}>{errorMessage}</p>
          )}

          <p className={styles.redirect_login}>
            ¿Ya tienes una cuenta? <Link to="/auth-user/login">Ingresar</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
