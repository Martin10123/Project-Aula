import styles from "./ChargeMoney.module.css";

export const OptionItem = ({ Icon, name }) => {
  return (
    <div className={styles.chargeMoney__list_option}>
      <Icon />
      <p>{name}</p>
    </div>
  );
};
