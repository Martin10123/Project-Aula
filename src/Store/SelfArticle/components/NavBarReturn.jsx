import { BsArrowLeft } from "react-icons/bs";

import styles from "../selfArticle.module.css";

export const NavBarReturn = () => {
  return (
    <div className={styles.nav_return}>
      <div className={styles.return}>
        <BsArrowLeft />
        <p>Nueva publicación</p>
      </div>
      <div className={styles.button_post}>
        <button>Publicar</button>
      </div>
    </div>
  );
};
