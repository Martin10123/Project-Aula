import { IoChevronBackOutline } from "react-icons/io5";
import { imagenWork } from "../../../images";

import { InfoProduct, InfoSeller } from "../components";

import styles from "../selfArticle.module.css";

export const SelfArticle = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button_return}>
        <IoChevronBackOutline />
      </button>
      <figure className={styles.image_product}>
        <img src={imagenWork} alt="Imagen del producto" />
      </figure>

      <div className={styles.content}>
        <InfoProduct />

        <InfoSeller />
      </div>
    </div>
  );
};
