import { IoIosArrowBack } from "react-icons/io";
import { bankNames, ButtonForm, InputForm } from "../helpers";

import styles from "./addCard.module.css";

export const AddNewCard = () => {
  return (
    <section className={styles.newCard__container}>
      <div className={styles.newCard__box_info}>
        <div className={styles.newCard__content_nav}>
          <IoIosArrowBack />
          <p>Agregar tarjeta</p>
        </div>

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

          <select className={styles.newCard__select}>
            <option value="">Escoger banco</option>
            {bankNames.map(({ name }) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>

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
