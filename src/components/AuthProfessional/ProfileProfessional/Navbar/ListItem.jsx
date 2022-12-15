import styles from "./navbarProf.module.css";

export const ListItem = ({ title }) => {
  return (
    <li className={styles.nav__li}>
      <p>{title}</p>
    </li>
  );
};
