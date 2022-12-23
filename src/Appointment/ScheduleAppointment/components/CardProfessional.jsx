import { photoUser } from "../../../images";

import styles from "../pages/SeeProfession/seeProf.module.css";

export const CardProfessional = () => {
  return (
    <div className={styles.card_info_personal}>
      <figure className={styles.img_professional}>
        <img src={photoUser} alt="Foto de perfil del profesional" />
        <figcaption>Luis Perez</figcaption>
      </figure>
      <p>Albañil</p>
    </div>
  );
};
