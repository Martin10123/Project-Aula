import { BsArrowLeft } from "react-icons/bs";

import { CreditCard } from "./CreditCard";
import { InfoMoney } from "../ChargeMoney/InfoMoney";
import { InfoUserItem } from "./InfoUserItem";

import styles from "./myAccount.module.css";

export const MyAccounts = () => {
  return (
    <section className={styles.myAccounts__container}>
      <div className={styles.myAccounts__return}>
        <BsArrowLeft />
        <p>Mi cuenta</p>
      </div>
      <div className={styles.myAccounts__content}>
        <div className={styles.myAccounts__container_money_creditCard}>
          <InfoMoney showMessageAccount={false} />

          <CreditCard />
        </div>

        <div className={styles.myAccounts__content_info_user}>
          <div className={styles.myAccounts__personal_info}>
            <h3>Información personal</h3>
          </div>

          <InfoUserItem title="Martin Elias" />
          <InfoUserItem title="Martinsimarra4@gmail.com" />
          <InfoUserItem title="2 tarjetas de credito" />
          <InfoUserItem title="Ha gastado $200.000.000" />

          <div className={styles.myAccounts__personal_info}>
            <p>Servicios adquiridos</p>
            <ul className={styles.myAccounts__list_servicies}>
              <li>Albañil</li>
              <li>Electricista</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
