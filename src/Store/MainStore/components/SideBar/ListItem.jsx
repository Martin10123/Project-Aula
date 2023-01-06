import { Link } from "react-router-dom";
import styles from "./sideBar.module.css";

export const ListItem = ({ Icon, title, linkTo }) => {
  return (
    <Link className={styles.list_item} to={linkTo}>
      <Icon />
      <p>{title}</p>
    </Link>
  );
};
