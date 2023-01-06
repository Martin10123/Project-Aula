import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import styles from "../stylesHelpers.module.css";

export const NavbarReturn = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.return_nav} onClick={() => navigate(-1)}>
      <BsArrowLeft />
      <p>{title}</p>
    </div>
  );
};
