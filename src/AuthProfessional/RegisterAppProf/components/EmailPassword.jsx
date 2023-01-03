import { InputForm } from "../../../Helpers";

import styles from "../pages/registerApp.module.css";

export const EmailPassword = ({ formState, onInputChange }) => {
  return (
    <>
      <InputForm
        nameInput="email"
        onChangeF={onInputChange}
        placeH="Correo..."
        type="email"
        value={formState.email}
      />
      <div className={styles.content_passwords}>
        <InputForm
          nameInput="password1"
          onChangeF={onInputChange}
          placeH="Contraseña..."
          type="password"
          value={formState.password1}
        />
        <InputForm
          nameInput="password2"
          onChangeF={onInputChange}
          placeH="Confirmar contraseña..."
          type="password"
          value={formState.password2}
        />
      </div>
    </>
  );
};
