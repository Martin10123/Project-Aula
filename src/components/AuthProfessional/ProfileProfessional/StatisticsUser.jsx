import styles from "./profileProf.module.css";

export const StatisticsUser = () => {
  return (
    <div className={styles.profile__statistics}>
      <div className={styles.profile__photos}>
        <span>Fotos</span>
        <p>25</p>
      </div>
      <div className={styles.profile__followers}>
        <span>Seguidores</span>
        <p>250</p>
      </div>
      <div className={styles.profile__percentage}>
        <span>Servicio</span>
        <p>50%</p>
      </div>
    </div>
  );
};
