import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import { ButtonForm, InputForm } from "../../Helpers";
import { useForm } from "../../hooks/useForm";

import styles from "./loginProf.module.css";

export const LoginProf = () => {
  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const onSubmitLogin = () => {
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
          <h2>Login Profesional</h2>
        </div>

        <div className={styles.form}>
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

          <div className="buttons">
            <ButtonForm title="Ingresar" onSubmit={onSubmitLogin} />
          </div>
        </div>

        <Link to="/auth-prof/recoverAccount" className={styles.forgot_password}>
          <h5>¿Olvidaste tu contraseña?</h5>
        </Link>

        <div className={styles.redirect_register}>
          <p>
            ¿No tienes cuenta? <Link to="/auth-prof/register">Registrate</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
