import styles from "./navbarProf.module.css";

export const ListItem = ({ title }) => {
  return (
    <li className={styles.li}>
      <p>{title}</p>
    </li>
  );
};
