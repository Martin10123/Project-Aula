import { BsArrowLeft } from "react-icons/bs";

import styles from "../stylesHelpers.module.css";

export const NavbarReturn = ({ title, onNavigate }) => {
  return (
    <div className={styles.return_nav} onClick={onNavigate}>
      <BsArrowLeft />
      <p>{title}</p>
    </div>
  );
};
