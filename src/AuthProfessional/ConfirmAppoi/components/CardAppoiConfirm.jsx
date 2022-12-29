import { DetailsItem } from "./DetailsItem";
import { photoUser } from "../../../images";

import styles from "../confirmAppoi.module.css";

export const CardAppoiConfirm = () => {
  return (
    <>
      <figure className={styles.image}>
        <img src={photoUser} alt="Foto de perfil del usuario" />
        <figcaption>Martin Elias</figcaption>
      </figure>

      <div className={styles.details_appoi}>
        <DetailsItem title="Dia" data="Martes" />
        <DetailsItem title="Hora" data="10:00 a.m." />
        <DetailsItem title="Precio" data="$ 200.000" />
        <DetailsItem title="Tipo de cita" data="Consulta" />
      </div>

      <div className={styles.details_item_desc}>
        <p>Descripción: </p>
        <p className={styles.desc_paragraf}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
          architecto voluptatibus praesentium beatae provident! Corporis sint
          accusantium modi maiores quia laboriosam odio possimus? Incidunt
          veritatis sapiente nemo nihil deserunt earum.
        </p>
      </div>
    </>
  );
};
