import { CreditCard } from "./CreditCard";
import { InfoMoney } from "../ChargeMoney/InfoMoney";
import { InfoUserItem } from "./InfoUserItem";
import { NavbarReturn } from "../helpers";

import styles from "./myAccount.module.css";

export const MyAccounts = () => {
  return (
    <section className={styles.container}>
      <NavbarReturn title="Mi cuenta" />
      <div className={styles.content}>
        <div className={styles.container_money_creditCard}>
          <InfoMoney showMessageAccount={false} />

          <CreditCard />
        </div>

        <div className={styles.content_info_user}>
          <div className={styles.personal_info}>
            <h3>Información personal</h3>
          </div>

          <InfoUserItem title="Martin Elias" />
          <InfoUserItem title="Martinsimarra4@gmail.com" />
          <InfoUserItem title="2 tarjetas de credito" />
          <InfoUserItem title="Ha gastado $200.000.000" />

          <div className={styles.personal_info}>
            <p>Servicios adquiridos</p>
            <ul className={styles.list_servicies}>
              <li>Albañil</li>
              <li>Electricista</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
