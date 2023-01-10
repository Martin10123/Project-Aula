import { InputForm } from "../../../Helpers";

import styles from "../pages/registerApp.module.css";

export const EmailPassword = ({
  formState,
  formSubmitted,
  formValidation,
  onInputChange,
}) => {
  const { emailValid, password1Valid, password2Valid } = formValidation;

  return (
    <>
      <InputForm
        error={!!emailValid && formSubmitted}
        helperText={emailValid}
        nameInput="email"
        onChangeF={onInputChange}
        placeH="Correo..."
        type="email"
        value={formState.email}
      />
      <div className={styles.content_together}>
        <InputForm
          error={!!password1Valid && formSubmitted}
          helperText={password1Valid}
          nameInput="password1"
          placeH="Contraseña..."
          type="password"
          value={formState.password1}
          onChangeF={onInputChange}
        />
        <InputForm
          error={!!password2Valid && formSubmitted}
          helperText={password2Valid}
          nameInput="password2"
          placeH="Confirmar contraseña..."
          type="password"
          value={formState.password2}
          onChangeF={onInputChange}
        />
      </div>
    </>
  );
};
