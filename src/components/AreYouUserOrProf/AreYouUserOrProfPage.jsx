import { useState } from "react";
import { FaRegUserCircle, FaHouseUser } from "react-icons/fa";
import { CardChooseOption, ModalResumen } from ".";

import styles from "./userOprof.module.css";

export const AreYouUserOrProfPage = () => {
  const [resumen, setResumen] = useState(false);

  return (
    <div className={styles.choose__container}>
      <h1 className={styles.choose__welcome}>
        Bienvenido a nuestra aplicación
      </h1>

      <h3 className={styles.choose__title}>
        Aplicación para la gestión de agendamiento de citas de reparaciones
        locativas.
      </h3>

      <p className={styles.choose__resumen} onClick={() => setResumen(true)}>
        Ver resumen de nuestra app
      </p>
      {resumen && <ModalResumen setResumen={setResumen} />}

      <div className={styles.choose__content_cards}>
        <CardChooseOption Logo={FaRegUserCircle} title="Usuario" />

        <CardChooseOption Logo={FaHouseUser} title="Profesional" />
      </div>
    </div>
  );
};
