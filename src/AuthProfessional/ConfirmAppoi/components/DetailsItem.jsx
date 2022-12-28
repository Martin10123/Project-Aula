import styles from "../confirmAppoi.module.css";

export const DetailsItem = ({ title, data }) => {
  return (
    <div className={styles.details_item}>
      <p>{title}: </p>
      <p>{data}</p>
    </div>
  );
};
