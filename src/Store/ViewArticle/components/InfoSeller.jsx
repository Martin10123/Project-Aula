import { Link } from "react-router-dom";
import { photoUser } from "../../../images";

import styles from "../viewArticle.module.css";

export const InfoSeller = () => {
  return (
    <div className={styles.info_seller}>
      <p>Información del vendedor</p>

      <figure className={styles.imagen_seller}>
        <img src={photoUser} alt="Foto del vendedor" />
        <figcaption>Martin Elias</figcaption>
      </figure>

      <div className={styles.contact_seller}>
        <div className={styles.data_seller}>
          <p>Ocupación</p>
          <p>Albañil</p>
        </div>
        <div className={styles.data_seller}>
          <p>Pais</p>
          <p>Colombia</p>
        </div>
        <div className={styles.data_seller}>
          <p>Telefono</p>
          <p>300-000-0000</p>
        </div>
        <div className={styles.buttons_seller}>
          <Link to="/profile">
            <button>Ver perfil</button>
          </Link>
          <Link to="/appointment/schedule">
            <button>Contratar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
