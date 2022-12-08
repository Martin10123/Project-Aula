import {
  bankNames,
  ButtonForm,
  InputForm,
  NavbarReturn,
  SelectBank,
} from "../helpers";

import styles from "./addCard.module.css";

export const AddNewCard = () => {
  return (
    <section className={styles.newCard__container}>
      <div className={styles.newCard__box_info}>
        <NavbarReturn title="Agregar tarjeta" />

        <div className={styles.newCard__form}>
          <div className={styles.newCard__content_input}>
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

          <div className={styles.newCard__content_input}>
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
