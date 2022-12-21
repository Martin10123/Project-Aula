import { AiFillSchedule } from "react-icons/ai";

import { chipCard } from "../../../images";

import styles from "./myAccount.module.css";

export const CreditCardItem = () => {
  return (
    <div className={styles.credit_card}>
      <div className={styles.card_title}>
        <p>Banco bogota</p>
        <img src={chipCard} alt="" />
      </div>
      <div className={styles.check_card}>
        <AiFillSchedule />
      </div>
      <div className={styles.card_number}>
        <p>1020 3030 4053 2034</p>
      </div>
      <div className={styles.card_valid_date}>
        <p>
          Valida hasta <span>12/25</span>
        </p>
        <p className={styles.name_user}>Martin Elias</p>
      </div>
    </div>
  );
};
