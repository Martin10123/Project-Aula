import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { daysAvaible, hoursAvaible } from "../../../../AuthProfessional";
import { NavbarReturn } from "../../../../BankPage/helpers";
import { OptionsFilter } from "../../components/OptionsFilter";
import { InputForm, ButtonForm } from "../../../../Helpers";
import { CardPreview } from "../../components";

import styles from "./scheduleAppoi.module.css";

export const ScheduleAppoi = () => {
  const [openDays, setOpenDays] = useState(false);
  const [openHours, setOpenHours] = useState(false);
  const navigate = useNavigate();

  const returnHome = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container_schedule}>
      <span className={styles.return_nav_close}>
        <NavbarReturn title="Agendar cita" />
      </span>

      <div className={styles.container_preview}>
        <div className={styles.content_schedule}>
          <div
            className={styles.select_option}
            onClick={() => setOpenDays(true)}
          >
            <p>Elegir dia</p>
          </div>

          {openDays && (
            <OptionsFilter data={daysAvaible} setOpenFilter={setOpenDays} />
          )}

          <div
            className={styles.select_option}
            onClick={() => setOpenHours(true)}
          >
            <p>Elegir Hora</p>
          </div>

          {openHours && (
            <OptionsFilter data={hoursAvaible} setOpenFilter={setOpenHours} />
          )}

          <div className={styles.type_service}>
            <h3>Tipo de servicio</h3>

            <div className={styles.select_option}>
              <p>Reparaciones</p>
            </div>
            <div className={styles.select_option}>
              <p>Consulta</p>
            </div>
            <div className={styles.select_option}>
              <p>Cambiar, renovar algo</p>
            </div>
          </div>

          <div className={styles.text_desc_problem}>
            <h3>Describe brevemente tu problema</h3>
            <textarea
              name=""
              placeholder="Describe brevemente tu problema..."
            />
            <span className={styles.text_optional}>Esto es opcional</span>
          </div>

          <div className={styles.price}>
            <h3>Estimar un precio</h3>
            <InputForm
              nameInput="price"
              onChangeF={() => {}}
              placeH="$ 200.000..."
              type="number"
              value=""
            />
            <span className={styles.text_optional}>Esto es opcional</span>
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

        <CardPreview />
      </div>
    </div>
  );
};
