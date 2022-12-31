import { BsArrowLeft } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ButtonForm, InputForm } from "../../Helpers";

import styles from "./loginPage.module.css";

export const LoginAppUser = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.comeBack_choose}>
          <BsArrowLeft />
          <p>Regresar</p>
        </div>

        <div className={styles.title}>
          <h2>Login App</h2>
        </div>

        <form className={styles.form}>
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

        <div className={styles.forgot_password}>
          <h5>¿Olvidaste tu contraseña?</h5>
        </div>

        <div className={styles.remember_data}>
          <input type="checkbox" name="" />
          <h5>Recordar mis datos</h5>
        </div>

        <ButtonForm title="Ingresar" />
        <hr />

        <div className={styles.with_fa_or_go}>
          <h3>Ingresar tambien con</h3>
          <div className={styles.content_logos}>
            <div className={styles.logo_face}>
              <FaFacebookF />
            </div>
            <div className={styles.logo_google}>
              <FcGoogle />
            </div>
          </div>
        </div>

        <div className={styles.redirect_register}>
          <p>
            ¿No tienes cuenta? <span>Registrate</span>
          </p>
        </div>
      </div>
    </div>
  );
};
