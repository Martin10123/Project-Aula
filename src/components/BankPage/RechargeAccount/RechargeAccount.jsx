import { ButtonForm, convertNumDece, NavbarReturn } from "../helpers";

import styles from "./recharge.module.css";

export const RechargeAccount = () => {
  return (
    <section className={styles.container}>
      <NavbarReturn title="Mi cuenta" />
      <div className={styles.content_info_bank}>
        <div className={styles.select_card}>
          <p>Selecciona cuenta</p>
          <select className={styles.from_money}>
            <option value="">Banco bogota $2000</option>
          </select>
        </div>

        <div className={styles.content_money_send}>
          <div className={styles.money_send_buttons}>
            <button className={styles.button_less}>-</button>
            <p>$ {10000}</p>
            <button className={styles.button_more}>+</button>
          </div>
          <input type="range" name="range" min="0" max="1000000" />
        </div>

        <div className={styles.buttons_options_money}>
          <p>Esoger monto a recargar</p>
          <ul className={styles.list_money}>
            <li>$ {convertNumDece(200000)}</li>
            <li>$ {convertNumDece(400000)}</li>
            <li>$ {convertNumDece(600000)}</li>
            <li>$ {convertNumDece(800000)}</li>
            <li>$ {convertNumDece(1000000)}</li>
          </ul>
        </div>
        <hr />

        <div className={styles.button_confirm_new_money}>
          <ButtonForm title="Confirmar" />
          <ButtonForm title="Cancelar" colorButton="red" />
        </div>
      </div>
    </section>
  );
};
