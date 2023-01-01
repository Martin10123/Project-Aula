import { Link } from "react-router-dom";
import { ButtonForm, InputForm } from "../../Helpers";
import { useForm } from "../../hooks/useForm";

import styles from "./recoverProfe.module.css";

export const RecoverAccountProf = () => {
  const { email, onInputChange } = useForm({
    email: "",
  });

  const onSubmitRecover = () => {
    console.log({
      email,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Recuperar tu cuenta</h2>

        <InputForm
          nameInput="email"
          onChangeF={onInputChange}
          placeH="Correo..."
          type="email"
          value={email}
        />

        <ButtonForm title="Recuperar" onSubmit={onSubmitRecover} />

        <Link to="/auth-prof/login">Volver</Link>
      </div>
    </div>
  );
};
