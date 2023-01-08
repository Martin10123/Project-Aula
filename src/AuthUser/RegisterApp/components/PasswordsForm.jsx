import { InputForm } from "../../../Helpers";

import styles from "../registerApp.module.css";

export const PasswordsForm = ({
  formState,
  formSubmitted,
  formValidation,
  onInputChange,
}) => {
  const { password1, password2 } = formState;
  const { password1Valid, password2Valid } = formValidation;

  return (
    <div className={styles.content_inputs}>
      <InputForm
        error={!!password1 && formSubmitted}
        nameInput="password1"
        onChangeF={onInputChange}
        placeH="Contraseña..."
        helperText={password1Valid}
        type="password"
        value={password1}
      />
      <InputForm
        error={!!password2 && formSubmitted}
        nameInput="password2"
        onChangeF={onInputChange}
        placeH="Confirmar contraseña..."
        helperText={password2Valid}
        type="password"
        value={password2}
      />
    </div>
  );
};
