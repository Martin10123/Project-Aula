import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { imagenWork } from "../../../images";

import styles from "../pages/mainStore.module.css";

export const CardProduct = () => {
  return (
    <div className={styles.content_card}>
      <figure className={styles.image}>
        <img src={imagenWork} alt="Producto" />
      </figure>

      <div className={styles.status_favorite}>
        <FcLikePlaceholder />
        <FcLike />
      </div>

      <div className={styles.info_product}>
        <p className={styles.name_product}>Clavos de acero</p>

        <div className={styles.prices}>
          <p>$ 300.000</p>
          <p>$ 250.000</p>
        </div>
      </div>
    </div>
  );
};
