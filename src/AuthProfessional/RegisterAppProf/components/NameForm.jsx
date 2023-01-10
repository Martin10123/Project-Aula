import { InputForm } from "../../../Helpers";

import styles from "../pages/registerApp.module.css";

export const NameForm = ({
  formState,
  formSubmitted,
  formValidation,
  onInputChange,
}) => {
  const { birthdayValid, displayNameValid, phoneNumberValid, nickNameValid } =
    formValidation;

  return (
    <>
      <div className={styles.content_together}>
        <InputForm
          error={!!displayNameValid && formSubmitted}
          helperText={displayNameValid}
          nameInput="displayName"
          onChangeF={onInputChange}
          placeH="Nombre completo..."
          type="text"
          value={formState.displayName}
        />
        <InputForm
          error={!!nickNameValid && formSubmitted}
          helperText={nickNameValid}
          nameInput="nickName"
          onChangeF={onInputChange}
          placeH="Apodo..."
          type="text"
          value={formState.nickName}
        />
      </div>
      <InputForm
        error={!!phoneNumberValid && formSubmitted}
        helperText={phoneNumberValid}
        nameInput="phoneNumber"
        onChangeF={onInputChange}
        placeH="Numero de telefono..."
        type="tel"
        value={formState.phoneNumber}
      />
      <InputForm
        error={!!birthdayValid && formSubmitted}
        helperText={birthdayValid}
        nameInput="birthday"
        onChangeF={onInputChange}
        placeH=""
        type="date"
        value={formState.birthday}
      />
    </>
  );
};
