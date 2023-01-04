import { CardInfoSelectAppoi } from ".";

import styles from "../pages/seeAppointment.module.css";

export const CardSeeAppoi = () => {
  return (
    <div className={styles.container_card}>
      <div className={styles.sidebar_color}></div>
      <div className={styles.container_card_info_select}>
        <CardInfoSelectAppoi />
      </div>
    </div>
  );
};
