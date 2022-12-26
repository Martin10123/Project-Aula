import { imagenWork, photoUser } from "../../images";

import styles from "./articlePreview.module.css";

const ListItem = ({ title }) => {
  return <p className={styles.price}>{title}</p>;
};

export const ArticlePreview = () => {
  return (
    <div className={styles.content_preview}>
      <div className={styles.preview_box}>
        <h2>Vista previa</h2>
        <div className={styles.preview_info}>
          {true ? (
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

            <ListItem title="$ 200.000" />

            <ListItem title="publicado en Colombia" />

            <ListItem title="Categoria" />

            <ListItem title="Estado" />

            <ListItem title="Descripción" />

            <div className={styles.info_user}>
              <figure className={styles.user_figure}>
                <img src={photoUser} alt="Foto de perfil de usuario" />

                <figcaption className={styles.user_name}>
                  Martin Elias
                </figcaption>
              </figure>

              <ListItem title="300-000-0000" />
              <ListItem title="Colombia" />
              <ListItem title="Martinsimarra@gmail.com" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
