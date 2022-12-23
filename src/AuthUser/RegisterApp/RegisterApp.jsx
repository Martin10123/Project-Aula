import { InputForm, ButtonForm } from "../../Helpers";
import styles from "./registerApp.module.css";

export const RegisterAppUser = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Crear cuenta</h2>
        <form className={styles.form}>
          <div className={styles.content_inputs}>
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
          <div className={styles.content_inputs}>
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

          <select name="gender" id="gender" className={styles.select}>
            <option value="Masculino">Hombre</option>
            <option value="Femenino">Mujer</option>
            <option value="Sin especificar">Sin especificar</option>
          </select>

          <ButtonForm title="Registrarse" />

          <p className={styles.redirect_login}>
            ¿Ya tienes una cuenta? <span>Ingresar</span>
          </p>
        </form>
      </div>
    </div>
  );
};
