import { photoUser } from "../../../images";

import styles from "./chargeMoney.module.css";

export const CardBank = () => {
  return (
    <div className={styles.chargeMoney__card_transition}>
      <div className={styles.chargeMoney__content_info_bank}>
        <figure className={styles.chargeMoney__card_img}>
          <img src={photoUser} alt="Foto de perfil del profesional" />
        </figure>
        <div className={styles.chargeMoney__card_title}>
          <p>Luis Perez</p>
          <p>12 junio, 2022</p>
        </div>
      </div>
      <div className={styles.chargeMoney__card_money_change}>
        <p>-$2.300</p>
      </div>
    </div>
  );
};
