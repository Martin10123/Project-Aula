import { ButtonForm, InputForm } from "../../Helpers";

import styles from "./loginProf.module.css";

export const LoginProf = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>Login Profesional</h2>
        </div>

        <div className={styles.form}>
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

          <div className="buttons">
            <ButtonForm title="Ingresar" />
          </div>
        </div>

        <div className={styles.forgot_password}>
          <h5>¿Olvidaste tu contraseña?</h5>
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
