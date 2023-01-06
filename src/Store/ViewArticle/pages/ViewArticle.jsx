import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { imagenWork } from "../../../images";

import { InfoProduct, InfoSeller } from "../components";

import styles from "../viewArticle.module.css";

export const ViewArticle = () => {
  return (
    <div className={styles.container}>
      <Link to="/store" className={styles.button_return}>
        <button>
          <IoChevronBackOutline />
        </button>
      </Link>
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
