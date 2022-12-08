import { BsArrowLeft } from "react-icons/bs";
import { convertNumDece } from "../helpers/BankNames";

import styles from "./recharge.module.css";

export const RechargeAccount = () => {
  return (
    <section className={styles.recharge__container}>
      <div className={styles.recharge__nav_return}>
        <BsArrowLeft />
        <p>Mi cuenta</p>
      </div>
      <div className={styles.recharge__content_info_bank}>
        <div className={styles.recharge__select_card}>
          <p>Selecciona cuenta</p>
          <select className={styles.recharge__from_money}>
            <option value="">Banco bogota $2000</option>
          </select>
        </div>

        <div className={styles.recharge__content_money_send}>
          <div className={styles.recharge__money_send_buttons}>
            <button className={styles.recharge__button_less}>-</button>
            <p>$ {10000}</p>
            <button className={styles.recharge__button_more}>+</button>
          </div>
          <input type="range" name="range" min="0" max="1000000" />
        </div>

        <div className={styles.recharge__buttons_options_money}>
          <p>Esoger monto a recargar</p>
          <ul className={styles.recharge__list_money}>
            <li>$ {convertNumDece(200000)}</li>
            <li>$ {convertNumDece(400000)}</li>
            <li>$ {convertNumDece(600000)}</li>
            <li>$ {convertNumDece(800000)}</li>
            <li>$ {convertNumDece(1000000)}</li>
          </ul>
        </div>
        <hr />

        <div className={styles.recharge__button_confirm_new_money}>
          <button>Confirmar</button>
          <button>Cancelar</button>
        </div>
      </div>
    </section>
  );
};
