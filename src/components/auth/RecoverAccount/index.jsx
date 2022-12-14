import { ButtonForm, InputForm } from "../../../Helpers";

import styles from "./recoverAccount.module.css";

export const RecoverAccount = () => {
  return (
    <div className={styles.recover_account__container}>
      <div className={styles.recover_account__content}>
        <h2>Recuperar cuenta</h2>

        <form className={styles.recover_account__form}>
          <InputForm
            nameInput="email"
            onChangeF={() => {}}
            placeH="Correo..."
            type="email"
            value=""
          />

          <ButtonForm title="Recuperar" />
        </form>

        <p className={styles.recover_account__login}>Ya tengo una cuenta</p>
        <p className={styles.recover_account__register}>Crear una cuenta</p>
      </div>
    </div>
  );
};
