import styles from "./profileUser.module.css";

export const DataCompleteUser = () => {
  return (
    <div className={styles.profile_user__container_other_data}>
      <div className={styles.profile_user__other_data}>
        <p>
          <span>Telefono:</span> 3002224444
        </p>
        <p>
          <span>Email:</span> Martin@gmail.com
        </p>
        <p>
          <span>Usuario:</span> Martin1012
        </p>
        <p>
          <span>Cumpleaños:</span> 12/junio/2001
        </p>
        <p>
          <span>Sexo:</span> Hombre
        </p>
      </div>
    </div>
  );
};
