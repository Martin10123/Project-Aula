import styles from "../myAccount.module.css";

export const InfoUserItem = ({ title }) => {
  return (
    <div className={styles.personal_info}>
      <p>{title}</p>
    </div>
  );
};
