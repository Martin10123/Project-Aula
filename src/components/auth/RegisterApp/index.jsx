import { InputForm, ButtonForm } from "../../Helpers";
import styles from "./registerApp.module.css";

export const RegisterApp = () => {
  return (
    <div className={styles.register__container}>
      <div className={styles.register__content}>
        <h2>Crear cuenta</h2>
        <form className={styles.register__form}>
          <div className={styles.register__content_inputs}>
            <InputForm
              nameInput="name"
              onChangeF={() => {}}
              placeH="Nombre..."
              type="text"
              value=""
            />
            <InputForm
              nameInput="lastname"
              onChangeF={() => {}}
              placeH="Apellido..."
              type="text"
              value=""
            />
          </div>
          <InputForm
            nameInput="username"
            onChangeF={() => {}}
            placeH="Nombre de usuario..."
            type="text"
            value=""
          />
          <InputForm
            nameInput="phoneNumber"
            maxLenght={10}
            onChangeF={() => {}}
            placeH="Telefono..."
            type="tel"
            value=""
          />
          <InputForm
            nameInput="email"
            onChangeF={() => {}}
            placeH="Correo..."
            type="email"
            value=""
          />
          <div className={styles.register__content_inputs}>
            <InputForm
              nameInput="password1"
              onChangeF={() => {}}
              placeH="Contraseña..."
              type="password"
              value=""
            />
            <InputForm
              nameInput="password2"
              onChangeF={() => {}}
              placeH="Confirmar contraseña..."
              type="password"
              value=""
            />
          </div>

          <select name="gender" id="gender" className={styles.register__select}>
            <option value="Masculino">Hombre</option>
            <option value="Femenino">Mujer</option>
            <option value="Sin especificar">Sin especificar</option>
          </select>

          <ButtonForm title="Registrarse" />

          <p className={styles.register__redirect_login}>
            ¿Ya tienes una cuenta? <span>Ingresar</span>
          </p>
        </form>
      </div>
    </div>
  );
};
