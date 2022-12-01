import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import styles from "./loginPage.module.css";

export const LoginAppUser = () => {
  return (
    <div className={styles.login__container}>
      <div className={styles.login__content}>
        <div className={styles.login__title}>
          <h2>Login App</h2>
        </div>

        <form className={styles.login__form}>
          <div className={styles.login__content_input}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Ingresa tu email..." />
          </div>

          <div className={styles.login__content_input}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Ingrese tu contraseña..."
            />
          </div>
        </form>

        <div className={styles.login__forgot_password}>
          <h5>¿Olvidaste tu contraseña?</h5>
        </div>

        <div className={styles.login__remember_data}>
          <input type="checkbox" name="" />
          <h5>Recordar mis datos</h5>
        </div>

        <div className={styles.login__button_box}>
          <button className={styles.login__button}>Login</button>
        </div>
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
