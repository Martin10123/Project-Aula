import { Link } from "react-router-dom";
import styles from "../ChargeMoney.module.css";

export const OptionItem = ({ Icon, name, linkTo }) => {
  return (
    <Link className={styles.list_option} to={linkTo}>
      <Icon />
      <p>{name}</p>
    </Link>
  );
};
