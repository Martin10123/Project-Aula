import styles from "../ChargeMoney.module.css";

export const OptionItem = ({ Icon, name }) => {
  return (
    <div className={styles.list_option}>
      <Icon />
      <p>{name}</p>
    </div>
  );
};
