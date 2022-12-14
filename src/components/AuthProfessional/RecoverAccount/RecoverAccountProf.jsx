import { ButtonForm, InputForm } from "../../../Helpers";

import styles from "./recoverProfe.module.css";

export const RecoverAccountProf = () => {
  return (
    <div className={styles.recover__container}>
      <div className={styles.recover__content}>
        <h2>Recuperar tu cuenta</h2>

        <InputForm
          nameInput="email"
          onChangeF={() => {}}
          placeH="Correo..."
          type="email"
          value=""
        />

        <ButtonForm title="Recuperar" />

        <p>Volver</p>
      </div>
    </div>
  );
};
