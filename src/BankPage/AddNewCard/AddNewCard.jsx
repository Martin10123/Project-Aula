import { ButtonForm, InputForm } from "../../Helpers";
import { NavbarReturn, SelectBank } from "../helpers";

import styles from "./addCard.module.css";

export const AddNewCard = () => {
  return (
    <section className={styles.container}>
      <div className={styles.box_info}>
        <NavbarReturn title="Agregar tarjeta" />

        <div className={styles.form}>
          <div className={styles.content_input}>
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

          <SelectBank />

          <div className={styles.content_input}>
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

          <ButtonForm title="Confirmar" />
        </div>
      </div>
    </section>
  );
};
