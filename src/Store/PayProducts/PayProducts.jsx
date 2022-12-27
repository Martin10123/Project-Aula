import { IoChevronBackOutline } from "react-icons/io5";

import { SelectBank } from "../../BankPage/helpers";
import { ButtonForm, InputForm } from "../../Helpers";

import styles from "./payProducts.module.css";

export const PayProducts = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.nav_return}>
          <IoChevronBackOutline />
          <p>Comprar</p>
        </div>

        <div className={styles.form_product}>
          <InputForm
            nameInput="name"
            onChangeF={() => {}}
            type="text"
            value=""
            placeH="Nombre..."
          />

          <InputForm
            nameInput="email"
            onChangeF={() => {}}
            type="email"
            value=""
            placeH="Email..."
          />

          <SelectBank />

          <InputForm
            maxLenght={16}
            nameInput="numberAccount"
            onChangeF={() => {}}
            placeH="Numero de la tarjeta..."
            type="tel"
            value=""
          />

          <InputForm
            maxLenght={4}
            nameInput="passwordAccount"
            onChangeF={() => {}}
            placeH="Contraseña de la cuenta..."
            type="tel"
            value=""
          />

          <div className={styles.buttons}>
            <ButtonForm title="Comprar" />
            <ButtonForm title="Cancelar" colorButton="#ff0000" />
          </div>
        </div>
      </div>
    </section>
  );
};
