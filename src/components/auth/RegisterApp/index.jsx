import { InputForm } from "./InputForm";

import styles from "./registerApp.module.css";

export const RegisterApp = () => {
  return (
    <div className={styles.register__container}>
      <div className={styles.register__content}>
        <h2>Register App</h2>
        <form className={styles.register__form}>
          <InputForm
            name="name"
            onChangeF={() => {}}
            type="text"
            value={""}
            placeholder="Nombre..."
          />
          <InputForm
            name="lastname"
            onChangeF={() => {}}
            type="text"
            value={""}
            placeholder="Apellido..."
          />
          <InputForm
            name="username"
            onChangeF={() => {}}
            type="text"
            value={""}
            placeholder="Nombre de usuario..."
          />
          <InputForm
            name="username"
            onChangeF={() => {}}
            type="email"
            value={""}
            placeholder="Correo..."
          />
          <InputForm
            name="password1"
            onChangeF={() => {}}
            type="password"
            value={""}
            placeholder="Contraseña..."
          />
          <InputForm
            name="password2"
            onChangeF={() => {}}
            type="password"
            value={""}
            placeholder="Contraseña..."
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
