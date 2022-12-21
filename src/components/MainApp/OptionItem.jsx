import styles from "./mainPage.module.css";

export const OptionItem = ({ Icon, title }) => {
  return (
    <div className={styles.main__item}>
      <Icon />
      <p>{title}</p>
    </div>
  );
};
