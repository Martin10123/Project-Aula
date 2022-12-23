import styles from "../mainPage.module.css";

export const OptionItem = ({ Icon, title }) => {
  return (
    <div className={styles.item}>
      <Icon />
      <p>{title}</p>
    </div>
  );
};
