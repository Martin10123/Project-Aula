import { InputForm } from "../../../Helpers";

import styles from "../registerApp.module.css";

export const NamesForm = ({
  formState,
  formSubmitted,
  formValidation,
  onInputChange,
}) => {
  const { displayName, username, phoneNumber, birthday, email } = formState;
  const {
    displayNameValid,
    usernameValid,
    phoneNumberValid,
    birthdayValid,
    emailValid,
  } = formValidation;

  return (
    <>
      <InputForm
        error={!!displayNameValid && formSubmitted}
        nameInput="displayName"
        onChangeF={onInputChange}
        placeH="Nombre completo..."
        helperText={displayNameValid}
        type="text"
        value={displayName}
      />
      <div className={styles.content_inputs}>
        <InputForm
          error={!!usernameValid && formSubmitted}
          nameInput="username"
          onChangeF={onInputChange}
          placeH="Nombre de usuario..."
          helperText={usernameValid}
          type="text"
          value={username}
        />
        <InputForm
          maxLenght={10}
          error={!!phoneNumberValid && formSubmitted}
          nameInput="phoneNumber"
          onChangeF={onInputChange}
          placeH="Telefono..."
          helperText={phoneNumberValid}
          type="tel"
          value={phoneNumber}
        />
      </div>
      <InputForm
        error={!!birthdayValid && formSubmitted}
        nameInput="birthday"
        onChangeF={onInputChange}
        placeH=""
        helperText={birthdayValid}
        type="date"
        value={birthday}
      />
      <InputForm
        error={!!emailValid && formSubmitted}
        nameInput="email"
        onChangeF={onInputChange}
        placeH="Correo..."
        helperText={emailValid}
        type="email"
        value={email}
      />
    </>
  );
};
