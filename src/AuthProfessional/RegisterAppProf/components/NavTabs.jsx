import styles from "../pages/registerApp.module.css";

export const NavTabs = ({ openTabs }) => {
  const tabs1 = openTabs === 1 ? styles.active_tabs : "";
  const tabs2 = openTabs === 2 ? styles.active_tabs : "";
  const tabs3 = openTabs === 3 ? styles.active_tabs : "";

  return (
    <div className={styles.nav_tabs}>
      <div className={`${styles.item_tabs} ${tabs1}`}>
        <p>Información personal</p>
      </div>
      <div className={`${styles.item_tabs} ${tabs2}`}>
        <p>Email y contraseña</p>
      </div>
      <div className={`${styles.item_tabs} ${tabs3}`}>
        <p>Disponibilidad</p>
      </div>
    </div>
  );
};
