import { imagenWork, photoUser } from "../../../images";

import styles from "./articlePreview.module.css";

export const ArticlePreview = () => {
  return (
    <div className={styles.content_preview}>
      <div className={styles.preview_box}>
        <h2>Vista previa</h2>
        <div className={styles.preview_info}>
          {false ? (
            <div className={styles.content_message}>
              <figure className={styles.figure}>
                <img src={imagenWork} alt={"gola"} />
              </figure>
            </div>
          ) : (
            <div className={styles.content_message}>
              <span>Vista previa de tu publicación</span>
              <p>
                A medida que crees la publicación, podras ver que aspecto tendrá
                en la store
              </p>
            </div>
          )}

          <div className={styles.info_product}>
            <h3 className={styles.title}>Titulo</h3>
            <p className={styles.price}>$ 200.000</p>
            <p className={styles.location}>publicado en Colombia</p>
            <p className={styles.category}>Categoria</p>
            <p className={styles.state}>Estado</p>
            <p className={styles.description}>Descripción</p>
            <div className={styles.info_user}>
              <figure className={styles.user_figure}>
                <img src={photoUser} alt="Foto de perfil de usuario" />

                <figcaption className={styles.user_name}>
                  Martin Elias
                </figcaption>
              </figure>

              <p className={styles.user_number}>300-000-0000</p>
              <p className={styles.user_location}>Colombia</p>
              <p className={styles.user_adress}>Martinsimarra@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
