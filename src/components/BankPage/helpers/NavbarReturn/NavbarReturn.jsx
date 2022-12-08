import { BsArrowLeft } from "react-icons/bs";

import styles from "../stylesHelpers.module.css";

export const NavbarReturn = ({ title }) => {
  return (
    <div className={styles.return_nav}>
      <BsArrowLeft />
      <p>{title}</p>
    </div>
  );
};
