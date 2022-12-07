import { BsBank } from "react-icons/bs";

import styles from "./chargeMoney.module.css";

export const InfoMoney = ({ showMessageAccount }) => {
  return (
    <div className={styles.chargeMoney__money_avaible}>
      <div className={styles.chargeMoney__name_bank}>
        <p>
          Banco bogota <span>Card</span>
        </p>
        {showMessageAccount && <p>Ver cuenta</p>}
      </div>
      <div className={styles.chargeMoney__quantifi_money}>
        <div className={styles.chargeMoney__spinner}></div>
        <BsBank />
        <p>Montón disponible</p>
        <p>$2.556.000</p>
      </div>
    </div>
  );
};
