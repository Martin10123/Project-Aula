import { registerBank } from "../../../images";
import { ButtonForm } from "../../Helpers/ButtonForm/ButtonForm";
import { InputForm } from "../../Helpers/InputForm/InputForm";
import { bankNames } from "../helpers/BankNames";

import styles from "./registerBank.module.css";

export const RegisterBack = () => {
  return (
    <div className={styles.registerBank__container}>
      <div className={styles.registerBank__content}>
        <figure className={styles.registerBank__image}>
          <img src={registerBank} alt="Logo register" />
        </figure>

        <div className={styles.registerBank__form}>
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

          <select className={styles.registerBank__select}>
            <option value="">Escoger banco</option>
            {bankNames.map(({ name }) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>

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
