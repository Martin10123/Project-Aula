import { InputForm } from "../../../Helpers";

import styles from "../registerApp.module.css";

export const NamesForm = ({
  formState,
  formSubmitted,
  formValidation,
  onInputChange,
}) => {
  const { name, lastname, username, phoneNumber, birthday, email } = formState;
  const {
    nameValid,
    lastnameValid,
    usernameValid,
    phoneNumberValid,
    birthdayValid,
    emailValid,
  } = formValidation;

  return (
    <>
      <div className={styles.content_inputs}>
        <InputForm
          error={!!nameValid && formSubmitted}
          nameInput="name"
          onChangeF={onInputChange}
          placeH="Nombre..."
          helperText={nameValid}
          type="text"
          value={name}
        />

        <InputForm
          error={!!lastnameValid && formSubmitted}
          nameInput="lastname"
          onChangeF={onInputChange}
          placeH="Apellido..."
          helperText={lastnameValid}
          type="text"
          value={lastname}
        />
      </div>
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
