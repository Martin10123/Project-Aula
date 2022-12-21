import { ButtonForm, InputForm } from "../../../Helpers";

import styles from "./recoverAccount.module.css";

export const RecoverAccount = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Recuperar cuenta</h2>

        <form className={styles.form}>
          <InputForm
            nameInput="email"
            onChangeF={() => {}}
            placeH="Correo..."
            type="email"
            value=""
          />

          <ButtonForm title="Recuperar" />
        </form>

        <p className={styles.login}>Ya tengo una cuenta</p>
        <p className={styles.register}>Crear una cuenta</p>
      </div>
    </div>
  );
};
