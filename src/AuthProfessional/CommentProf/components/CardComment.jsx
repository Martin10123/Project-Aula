import { ButtonsComment } from ".";
import { photoUser } from "../../../images";

import styles from "../commentProf.module.css";

export const CardComment = () => {
  return (
    <div className={styles.comment}>
      <figure className={styles.image_user}>
        <img src={photoUser} alt="Foto de perfil" />
        <figcaption>Martin Elias</figcaption>
      </figure>

      <div className={styles.info_date_calif_opinion}>
        <p>12/10/22</p>
        <p>2/10</p>
      </div>

      <div className={styles.content_message}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
          est, obcaecati harum saepe incidunt dicta modi exercitationem autem
          eaque beatae perspiciatis eius. Maxime velit est voluptates odio,
          debitis vero tempora!
        </p>
      </div>

      <ButtonsComment />
    </div>
  );
};
