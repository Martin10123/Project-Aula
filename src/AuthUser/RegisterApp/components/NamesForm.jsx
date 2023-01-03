import { InputForm } from "../../../Helpers";

import styles from "../registerApp.module.css";

export const NamesForm = ({
  name,
  lastname,
  username,
  phoneNumber,
  email,
  onInputChange,
}) => {
  return (
    <>
      <div className={styles.content_inputs}>
        <InputForm
          nameInput="name"
          onChangeF={onInputChange}
          placeH="Nombre..."
          type="text"
          value={name}
        />
        <InputForm
          nameInput="lastname"
          onChangeF={onInputChange}
          placeH="Apellido..."
          type="text"
          value={lastname}
        />
      </div>
      <InputForm
        nameInput="username"
        onChangeF={onInputChange}
        placeH="Nombre de usuario..."
        type="text"
        value={username}
      />
      <InputForm
        nameInput="phoneNumber"
        maxLenght={10}
        onChangeF={onInputChange}
        placeH="Telefono..."
        type="tel"
        value={phoneNumber}
      />
      <InputForm
        nameInput="email"
        onChangeF={onInputChange}
        placeH="Correo..."
        type="email"
        value={email}
      />
    </>
  );
};
