import { AiFillSchedule } from "react-icons/ai";

import { chipCard } from "../../../images";

import styles from "./myAccount.module.css";

export const CreditCardItem = () => {
  return (
    <div className={styles.myAccounts__credit_card}>
      <div className={styles.myAccounts__card_title}>
        <p>Banco bogota</p>
        <img src={chipCard} alt="" />
      </div>
      <div className={styles.myAccounts__check_card}>
        <AiFillSchedule />
      </div>
      <div className={styles.myAccounts__card_number}>
        <p>1020 3030 4053 2034</p>
      </div>
      <div className={styles.myAccounts__card_valid_date}>
        <p>
          Valida hasta <span>12/25</span>
        </p>
        <p className={styles.myAccounts__name_user}>Martin Elias</p>
      </div>
    </div>
  );
};
