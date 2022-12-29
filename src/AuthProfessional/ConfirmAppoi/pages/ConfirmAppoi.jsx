import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

import { CardAppoiConfirm, UpdateAppoi } from "../components";

import styles from "../confirmAppoi.module.css";

export const ConfirmAppoi = () => {
  const [openUpdate, setOpenUpdate] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.return_nav}>
        <BsArrowLeft />
        <p>Confirmar citas</p>
      </div>

      <div className={styles.content_card}>
        <div className={styles.card_appoi}>
          <CardAppoiConfirm />

          <div className={styles.buttons}>
            <button>Ver perfil</button>
            <button>Aceptar</button>
            <button onClick={() => setOpenUpdate(true)}>Modificar</button>
            <button>Cancelar</button>
          </div>
        </div>
      </div>

      {openUpdate && <UpdateAppoi setOpenUpdate={setOpenUpdate} />}
    </div>
  );
};
