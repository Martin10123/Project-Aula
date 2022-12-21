import { registerBank } from "../../../images";
import { ButtonForm, InputForm, SelectBank } from "../helpers";

import styles from "./registerBank.module.css";

export const RegisterBack = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <figure className={styles.image}>
          <img src={registerBank} alt="Logo register" />
        </figure>

        <div className={styles.form}>
          <h2>Registrar cuenta bancaria</h2>
          <div className={styles.registerBack__content_input}>
            <InputForm
              nameInput="name"
              onChangeF={() => {}}
              type="text"
              value=""
              placeH="Nombre..."
            />

            <InputForm
              nameInput="lastname"
              onChangeF={() => {}}
              type="text"
              value=""
              placeH="Apellido..."
            />
          </div>

          <InputForm
            nameInput="email"
            onChangeF={() => {}}
            type="email"
            value=""
            placeH="Email..."
          />

          <div className={styles.registerBack__content_input}>
            <InputForm
              nameInput="password1"
              onChangeF={() => {}}
              type="password"
              value=""
              placeH="Contraseña..."
            />

            <InputForm
              nameInput="password2"
              onChangeF={() => {}}
              type="password"
              value=""
              placeH="Confirmar contraseña..."
            />
          </div>

          <SelectBank />

          <div className={styles.registerBack__content_input}>
            <InputForm
              maxLenght={4}
              nameInput="passwordAccount1"
              onChangeF={() => {}}
              placeH="Contraseña de la cuenta..."
              type="tel"
              value=""
            />

            <InputForm
              maxLenght={4}
              nameInput="passwordAccount2"
              onChangeF={() => {}}
              placeH="Confirmar contraseña de la cuenta..."
              type="tel"
              value=""
            />
          </div>

          <ButtonForm title="Registrarse" />
        </div>
      </div>
    </div>
  );
};
