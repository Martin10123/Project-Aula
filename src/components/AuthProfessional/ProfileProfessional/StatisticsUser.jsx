import styles from "./profileProf.module.css";

export const StatisticsUser = () => {
  return (
    <div className={styles.statistics}>
      <div className={styles.photos}>
        <span>Fotos</span>
        <p>25</p>
      </div>
      <div className={styles.followers}>
        <span>Seguidores</span>
        <p>250</p>
      </div>
      <div className={styles.percentage}>
        <span>Servicio</span>
        <p>50%</p>
      </div>
    </div>
  );
};
