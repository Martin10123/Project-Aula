import { AiOutlineDelete } from "react-icons/ai";
import { imagenWork } from "../../../images";

import styles from "../myCart.module.css";

export const CardProduct = () => {
  return (
    <div className={styles.card_product}>
      <figure className={styles.image_product}>
        <img src={imagenWork} alt="Imagen del producto" />
      </figure>

      <div className={styles.info_product}>
        <div className={styles.content_info_name_delete}>
          <span className={styles.name_price_product}>
            <p>Herramienta</p>
            <p>$ 200.000</p>
          </span>
          <AiOutlineDelete />
        </div>

        <div className={styles.buttons}>
          <button>-</button>

          <p>2</p>

          <button>+</button>
        </div>
      </div>
    </div>
  );
};
