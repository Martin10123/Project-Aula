import { Link } from "react-router-dom";
import { InputForm, ButtonForm, dataCountrys } from "../../Helpers";
import { useForm } from "../../hooks/useForm";

import styles from "./registerApp.module.css";

export const RegisterAppUser = () => {
  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const onSubmitLoginUser = () => {
    console.log({
      email,
      password,
    });
  };

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

          <select name="country" id="country" className={styles.select}>
            <option value="">Pais</option>
            {dataCountrys.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>

          <select name="gender" id="gender" className={styles.select}>
            <option value="Masculino">Hombre</option>
            <option value="Femenino">Mujer</option>
            <option value="Sin especificar">Sin especificar</option>
          </select>

          <ButtonForm title="Registrarse" />

          <p className={styles.redirect_login}>
            ¿Ya tienes una cuenta? <Link to="/auth-user/login">Ingresar</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
