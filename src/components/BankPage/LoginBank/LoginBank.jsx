import { imgFooter, loginBank } from "../../../images";
import { ButtonForm, InputForm } from "../helpers";

import styles from "./loginBank.module.css";

export const LoginBank = () => {
  return (
    <div className={styles.loginBank__container}>
      <div className={styles.loginBank__content}>
        <figure className={styles.loginBank__image}>
          <img src={loginBank} alt="" />
        </figure>
        <div className={styles.loginBank__form}>
          <h2>Ingresar al banco</h2>
          <InputForm
            nameInput="email"
            onChangeF={() => {}}
            type="text"
            value=""
            placeH="Ingresa tu email..."
          />
          <InputForm
            nameInput="password"
            onChangeF={() => {}}
            type="password"
            value=""
            placeH="Ingresa tu contraseña..."
          />
          <p>¿Olvidaste tu contraseña?</p>

          <ButtonForm title="Ingresar" />
        </div>
        <div className={styles.loginBank__redirect_register}>
          <p>¿No tienes cuenta? Registrate</p>
        </div>
      </div>

      <div className={styles.loginBank__img_footer}>
        <img src={imgFooter} alt="" />
      </div>
    </div>
  );
};
