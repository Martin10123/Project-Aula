import styles from "../schedule.module.css";

export const OptionsFilter = ({ data, setOpenFilter }) => {
  return (
    <div className={styles.list_profession}>
      <div
        className={styles.back_close}
        onClick={() => setOpenFilter(false)}
      ></div>
      <ul className={styles.content_list}>
        {data.map((service) => (
          <li className={styles.item} key={service}>
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
};
