import { IoIosArrowBack } from "react-icons/io";

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
          <div className={styles.newCard__name_card}>
            <label htmlFor="">Nombre de la tarjeta</label>
            <input type="text" placeholder="Ej: Martin Elias..." />
          </div>
          <div className={styles.newCard__content_inputs_number_card}>
            <label>Numero de la tarjeta</label>
            <div className={styles.newCard__inputs_number_card}>
              <input type="tel" maxLength={4} placeholder="Ej: 2345" />
              <input type="tel" maxLength={4} placeholder="Ej: 4355" />
              <input type="tel" maxLength={4} placeholder="Ej: 6766" />
              <input type="tel" maxLength={4} placeholder="Ej: 4455" />
            </div>
          </div>
          <div className={styles.newCard__box_valid_card_and_cvc}>
            <div className={styles.newCard__content_valid_card}>
              <label htmlFor="">Fecha validación (MM/YY)</label>
              <div className={styles.newCard__inputs_valid_card}>
                <input type="tel" maxLength={2} placeholder="MM" />
                <input type="tel" maxLength={2} placeholder="YY" />
              </div>
            </div>
            <div className={styles.newCard__content_cvc}>
              <label htmlFor="">CVC</label>
              <input type="tel" maxLength={4} placeholder="Ej: 3453" />
            </div>
          </div>

          <div className={styles.newCard__button_send_info}>
            <button>Confirmar</button>
          </div>
        </div>
      </div>
    </section>
  );
};
