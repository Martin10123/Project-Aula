import { photoUser } from "../../../images";

import styles from "../selfArticle.module.css";

export const InfoUserSeller = () => {
  return (
    <div className={styles.content_info_user}>
      <img
        alt="Foto de perfil del usuario"
        className={styles.image_user}
        src={photoUser}
      />
      <span className={styles.name}>
        <p>Martin Elias</p>
        <small>Publicado en el store</small>
      </span>
    </div>
  );
};
