import { Link } from "react-router-dom";
import styles from "../userOprof.module.css";

export const CardChooseOption = ({ Logo, title, path }) => {
  return (
    <Link to={path} className={styles.card_user}>
      <Logo />
      <p>{title}</p>
    </Link>
  );
};
