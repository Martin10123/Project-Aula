import { Link } from "react-router-dom";

import { BsArrowLeft } from "react-icons/bs";

import { ButtonForm, InputForm } from "../../Helpers";
import { useForm } from "../../hooks/useForm";

import styles from "./loginPage.module.css";

export const LoginAppUser = () => {
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
        <Link to="/" className={styles.comeBack_choose}>
          <BsArrowLeft />
          <p>Regresar</p>
        </Link>

        <div className={styles.title}>
          <h2>Login App</h2>
        </div>

        <form className={styles.form}>
          <InputForm
            nameInput="email"
            onChangeF={onInputChange}
            placeH="Correo..."
            type="email"
            value={email}
          />

          <InputForm
            nameInput="password"
            onChangeF={onInputChange}
            placeH="Contraseña..."
            type="password"
            value={password}
          />
        </form>

        <Link to="/auth-user/recoverAccount" className={styles.forgot_password}>
          <h5>¿Olvidaste tu contraseña?</h5>
        </Link>

        <div className={styles.remember_data}>
          <input type="checkbox" name="" />
          <h5>Recordar mis datos</h5>
        </div>

        <ButtonForm title="Ingresar" onSubmit={onSubmitLoginUser} />
        <hr />

        <div className={styles.redirect_register}>
          <p>
            ¿No tienes cuenta? <Link to="/auth-user/register">Registrate</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
