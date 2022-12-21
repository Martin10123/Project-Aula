import imgPrueba from "../../../images/register.jpg";

import styles from "./profileUser.module.css";

export const InfoPersonalUser = () => {
  return (
    <div className={styles.data_user}>
      <img className={styles.imgProfile} src={imgPrueba} alt="img Prueba" />
      <p className={styles.name_user}>Martin Elias </p>
      <span className={styles.country_year}>
        <p>Colombia</p>
        <p>21 años</p>
      </span>
    </div>
  );
};
