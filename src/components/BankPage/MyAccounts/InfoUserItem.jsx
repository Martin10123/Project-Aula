import styles from "./myAccount.module.css";

export const InfoUserItem = ({ title }) => {
  return (
    <div className={styles.myAccounts__personal_info}>
      <p>{title}</p>
    </div>
  );
};
