import { photoUser } from "../../../images";
import { ButtonsCard, SelectAppoi } from ".";

import styles from "../pages/seeAppointment.module.css";

export const CardInfoSelectAppoi = () => {
  return (
    <div className={styles.card_info}>
      <div className={styles.content_info_profe}>
        <figure className={styles.image_prof}>
          <img src={photoUser} alt="Foto del profesional" />
        </figure>

        <div className={styles.name_profession}>
          <p>Martin Elias Simarra Salgado</p>
          <p>Albañil</p>
        </div>
      </div>

      <div className={styles.container_select_appoi}>
        <SelectAppoi info="Confirmada" />

        <SelectAppoi info="300-000-0000" />

        <SelectAppoi info="Miercoles" />

        <SelectAppoi info="10:00 a.m." />

        <SelectAppoi info="$3.000.000" />
      </div>

      <ButtonsCard />
    </div>
  );
};
