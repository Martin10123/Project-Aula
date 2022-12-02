import { imgFooter, loginBack } from "../../../images";
import { InputForm } from "../../Helpers/InputForm/InputForm";

import styles from "./loginBack.module.css";

export const LoginBack = () => {
  return (
    <div className={styles.loginBack__container}>
      <div className={styles.loginBack__content}>
        <figure className={styles.loginBack__image}>
          <img src={loginBack} alt="" />
        </figure>
        <div className={styles.loginBack__form}>
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
          <button className={styles.loginBack__button}>Ingresar</button>
        </div>
        <div className={styles.loginBack__redirect_register}>
          <p>¿No tienes cuenta? Registrate</p>
        </div>
      </div>

      <div className={styles.loginBack__img_footer}>
        <img src={imgFooter} alt="" />
      </div>
    </div>
  );
};
