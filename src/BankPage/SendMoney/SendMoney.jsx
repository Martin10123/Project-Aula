import { ButtonForm, InputForm } from "../../helpers";
import { convertNumDece, NavbarReturn, SelectBank } from "../helpers";

import styles from "./sentMoney.module.css";

export const SendMoney = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <NavbarReturn title="Transferir" />

        <div className={styles.form}>
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
          <InputForm
            nameInput="documentID"
            onChangeF={() => {}}
            type="tel"
            maxLenght={10}
            value=""
            placeH="Numero de documento..."
          />

          <SelectBank />

          <InputForm
            nameInput="numberAccount"
            onChangeF={() => {}}
            type="tel"
            maxLenght={16}
            value=""
            placeH="Numero de cuenta..."
          />

          <div className={styles.select_card}>
            <p>Selecciona tu cuenta</p>
            <select className={styles.select_from_money}>
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

          <ButtonForm title="Confirmar" />
        </div>
      </div>
    </section>
  );
};
