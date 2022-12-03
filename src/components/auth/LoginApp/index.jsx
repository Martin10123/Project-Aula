import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ButtonForm, InputForm } from "../../Helpers";

import styles from "./loginPage.module.css";

export const LoginAppUser = () => {
  return (
    <div className={styles.login__container}>
      <div className={styles.login__content}>
        <div className={styles.login__title}>
          <h2>Login App</h2>
        </div>

        <form className={styles.login__form}>
          <InputForm
            nameInput="email"
            onChangeF={() => {}}
            placeH="Correo..."
            type="email"
            value=""
          />

          <InputForm
            nameInput="password"
            onChangeF={() => {}}
            placeH="Contraseña..."
            type="password"
            value=""
          />
        </form>

        <div className={styles.login__forgot_password}>
          <h5>¿Olvidaste tu contraseña?</h5>
        </div>

        <div className={styles.login__remember_data}>
          <input type="checkbox" name="" />
          <h5>Recordar mis datos</h5>
        </div>

        <ButtonForm title="Ingresar" />
        <hr />

        <div className={styles.login__with_fa_or_go}>
          <h3>Ingresar tambien con</h3>
          <div className={styles.login__content_logos}>
            <div className={styles.login__logo_face}>
              <FaFacebookF />
            </div>
            <div className={styles.login__logo_google}>
              <FcGoogle />
            </div>
          </div>
        </div>

        <div className={styles.login__redirect_register}>
          <p>
            ¿No tienes cuenta? <span>Registrate</span>
          </p>
        </div>
      </div>
    </div>
  );
};
