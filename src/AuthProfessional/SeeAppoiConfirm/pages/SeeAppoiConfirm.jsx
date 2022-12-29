import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

import { CardAppoiConfirm } from "../../ConfirmAppoi/components";
import { ReasonCancelattion } from "../components/ReasonCancelattion";

import styles from "../seeAppoiConfirm.module.css";

export const SeeAppoiConfirm = () => {
  const [openReasons, setOpenReasons] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.return_nav}>
          <BsArrowLeft />
          <p>Confirmar citas</p>
        </div>

        <div className={styles.content_card}>
          <div className={styles.card_appoi}>
            <CardAppoiConfirm />

            <div className={styles.buttons}>
              <button onClick={() => setOpenReasons(true)}>Cancelar</button>
            </div>
          </div>
        </div>
      </div>

      {openReasons && <ReasonCancelattion setOpenReasons={setOpenReasons} />}
    </div>
  );
};
