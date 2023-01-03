import { Link } from "react-router-dom";
import { ButtonForm } from "../../../Helpers";

import styles from "../pages/registerApp.module.css";

export const ButtonsRegister = ({ onSubmitForm, openTabs, onNextPage }) => {
  return (
    <div className={styles.content_button_next}>
      {openTabs === 3 && (
        <div className={styles.buttons}>
          <ButtonForm title="Registrarse" onSubmit={onSubmitForm} />
        </div>
      )}

      {openTabs != 3 && (
        <button className={styles.button_next} onClick={onNextPage}>
          Siguiente
        </button>
      )}

      <p className={styles.redirect_login}>
        ¿Ya tienes una cuenta? <Link to="/auth-prof/login">Ingresar</Link>
      </p>
    </div>
  );
};
