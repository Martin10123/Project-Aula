import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import styles from "../selfArticle.module.css";

export const NavBarReturn = () => {
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.nav_return}>
      <div className={styles.return}>
        <BsArrowLeft onClick={onBack} />
        <p>Nueva publicación</p>
      </div>
      <div className={styles.button_post}>
        <button>Publicar</button>
      </div>
    </div>
  );
};
