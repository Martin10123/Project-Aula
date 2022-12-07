import { MdOutlineSwipe } from "react-icons/md";
import { CreditCardItem } from "./CreditCardItem";

import styles from "./myAccount.module.css";

export const CreditCard = () => {
  return (
    <div className={styles.myAccounts__boxShadow_card}>
      <div className={styles.myAccounts__count_cards}>
        <p>Tienes 2 tarjetas</p>
        <span>
          <p>Desliza </p>
          <MdOutlineSwipe />
        </span>
      </div>
      <div className={styles.myAccounts__container_cards}>
        <div className={styles.myAccounts__content_credit_card}>
          <CreditCardItem />
        </div>
      </div>
    </div>
  );
};
