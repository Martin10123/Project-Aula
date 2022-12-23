import { BsBank } from "react-icons/bs";

import styles from "../chargeMoney.module.css";

export const InfoMoney = ({ showMessageAccount }) => {
  return (
    <div className={styles.money_avaible}>
      <div className={styles.name_bank}>
        <p>
          Banco bogota <span>Card</span>
        </p>
        {showMessageAccount && <p>Ver cuenta</p>}
      </div>
      <div className={styles.quantifi_money}>
        <div className={styles.spinner}></div>
        <BsBank />
        <p>Montón disponible</p>
        <p>$2.556.000</p>
      </div>
    </div>
  );
};
