import imgPrueba from "../../../images/register.jpg";

import styles from "./profileUser.module.css";

export const InfoPersonalUser = () => {
  return (
    <div className={styles.profile_user__data_user}>
      <img
        className={styles.profile_user__imgProfile}
        src={imgPrueba}
        alt="img Prueba"
      />
      <p className={styles.profile_user__name_user}>Martin Elias </p>
      <span className={styles.profile_user__country_year}>
        <p>Colombia</p>
        <p>21 años</p>
      </span>
    </div>
  );
};
