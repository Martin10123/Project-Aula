import { photoUser } from "../../../images";

import styles from "./chargeMoney.module.css";

export const CardBank = () => {
  return (
    <div className={styles.card_transition}>
      <div className={styles.content_info_bank}>
        <figure className={styles.card_img}>
          <img src={photoUser} alt="Foto de perfil del profesional" />
        </figure>
        <div className={styles.card_title}>
          <p>Luis Perez</p>
          <p>12 junio, 2022</p>
        </div>
      </div>
      <div className={styles.card_money_change}>
        <p>-$2.300</p>
      </div>
    </div>
  );
};
