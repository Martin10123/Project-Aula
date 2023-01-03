import { InputForm } from "../../../Helpers";

import styles from "../registerApp.module.css";

export const PasswordsForm = ({ password1, password2, onInputChange }) => {
  return (
    <div className={styles.content_inputs}>
      <InputForm
        nameInput="password1"
        onChangeF={onInputChange}
        placeH="Contraseña..."
        type="password"
        value={password1}
      />
      <InputForm
        nameInput="password2"
        onChangeF={onInputChange}
        placeH="Confirmar contraseña..."
        type="password"
        value={password2}
      />
    </div>
  );
};
