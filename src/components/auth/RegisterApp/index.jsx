import { InputForm } from "../../Helpers/InputForm/InputForm";
import styles from "./registerApp.module.css";

export const RegisterApp = () => {
  return (
    <div className={styles.register__container}>
      <div className={styles.register__content}>
        <h2>Crear cuenta</h2>
        <form className={styles.register__form}>
          <InputForm
            nameInput="name"
            onChangeF={() => {}}
            type="text"
            value=""
            placeH="Nombre..."
          />
          <InputForm
            nameInput="lastname"
            onChangeF={() => {}}
            type="text"
            value=""
            placeH="Apellido..."
          />
          <InputForm
            nameInput="username"
            onChangeF={() => {}}
            type="text"
            value=""
            placeH="Nombre de usuario..."
          />
          <InputForm
            nameInput="email"
            onChangeF={() => {}}
            type="email"
            value=""
            placeH="Correo..."
          />
          <InputForm
            nameInput="password1"
            onChangeF={() => {}}
            type="password"
            value=""
            placeH="Contraseña..."
          />
          <InputForm
            nameInput="password2"
            onChangeF={() => {}}
            type="password"
            value=""
            placeH="Confirmar contraseña..."
          />

          <select name="gender" id="gender" className={styles.register__select}>
            <option value="Masculino">Hombre</option>
            <option value="Femenino">Mujer</option>
            <option value="Sin especificar">Sin especificar</option>
          </select>

          <button className={styles.register__button}>Registrarse</button>

          <p className={styles.register__redirect_login}>
            ¿Ya tienes una cuenta? <span>Ingresar</span>
          </p>
        </form>
      </div>
    </div>
  );
};
