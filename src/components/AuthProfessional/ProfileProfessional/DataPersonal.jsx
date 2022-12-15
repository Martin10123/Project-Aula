import styles from "./profileProf.module.css";

export const DataPersonal = ({ Icon, title, desc }) => {
  return (
    <div className={styles.profile__data}>
      <Icon />
      <p>
        {title}: {desc}
      </p>
    </div>
  );
};
