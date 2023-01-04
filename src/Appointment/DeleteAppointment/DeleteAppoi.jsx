import { useNavigate } from "react-router-dom";
import { ButtonForm } from "../../Helpers";
import { CardItem } from "../ScheduleAppointment/components";

import styles from "./deleteAppoi.module.css";

export const DeleteAppoi = () => {
  const navigate = useNavigate();

  const returnHome = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>Cancelar cita</h2>
        </div>

        <div className={styles.info_appoint}>
          <CardItem name="ID profesional" info="123433443" />
          <CardItem name="Nombre" info="Pedro Perez" />
          <CardItem name="Ocupación" info="Albañil" />
          <CardItem name="Email" info="Pedro@gmail.com" />
          <CardItem name="Telefono" info="300-000-0000" />
          <CardItem name="Dia" info="Jueves" />
          <CardItem name="Hora" info="10:00 a.m." />
        </div>

        <div className={styles.buttons}>
          <ButtonForm title="Agendar" />
          <ButtonForm
            title="Cancelar"
            colorButton="red"
            onSubmit={returnHome}
          />
        </div>
      </div>
    </div>
  );
};
