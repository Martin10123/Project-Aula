import { photoUser } from "../../../images";

import styles from "../Pages/ScheduleAppoi/scheduleAppoi.module.css";

export const CardPreview = () => {
  return (
    <div className={styles.content_preview}>
      <div className={styles.card_preview}>
        <div className={styles.info_professional}>
          <img
            className={styles.image_prof}
            src={photoUser}
            alt="Foto del profesional"
          />
          <span className={styles.name_prof}>
            <p>Luis Perez</p>
            <p>Albañil</p>
          </span>
        </div>

        <div className={styles.info_appointment}>
          <DataSelect title="Dia" info="Lunes" />

          <DataSelect title="Hora" info="10:00 p.m." />

          <DataSelect title="Tipo de servicio" info="Consulta" />

          <DataSelect title="Precio estimado" info="$ 200.000" />

          <DataSelect
            title="Descripción del problema"
            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              maiores facilis quibusdam distinctio nemo et aperiam dignissimos
              nesciunt exercitationem est! Sunt laudantium maiores nisi minima
              culpa odit aut optio saepe."
          />
        </div>
      </div>
    </div>
  );
};

const DataSelect = ({ title, info }) => {
  return (
    <div className={styles.data_select}>
      <span>{title}</span>
      <p>{info}</p>
    </div>
  );
};
