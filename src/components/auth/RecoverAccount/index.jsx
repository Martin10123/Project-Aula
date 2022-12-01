import { InputForm } from "../RegisterApp/InputForm";

import styles from "./recoverAccount.module.css";

export const RecoverAccount = () => {
  return (
    <div className={styles.recover_account__container}>
      <div className={styles.recover_account__content}>
        <h2 className={styles.recover_account__title}>Recuperar cuenta</h2>

        <form className={styles.recover_account__form}>
          <InputForm
            name="email"
            onChangeF={() => {}}
            type="email"
            value={""}
            placeholder="Email..."
          />

          <button className={styles.recover_account__button}>Recuperar</button>
        </form>

        <p className={styles.recover_account__login}>Ya tengo una cuenta</p>
        <p className={styles.recover_account__register}>Crear una cuenta</p>
      </div>
    </div>
  );
};
