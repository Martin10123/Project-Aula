import styles from "../myCart.module.css";

export const CountProduct = ({ title, data }) => {
  return (
    <div className={styles.count_product}>
      <p>{title}</p>
      <p>{data}</p>
    </div>
  );
};
