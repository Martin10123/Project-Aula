import { useState } from "react";

import { ButtonForm, InputForm } from "../../../Helpers";
import { daysAvaible, hoursAvaible } from "../../helpers/OptionsProf";
import { NavbarReturn } from "../../../BankPage/helpers";
import { OptionsFilter } from "../../../Appointment/ScheduleAppointment/components";

import styles from "../confirmAppoi.module.css";

export const UpdateAppoi = ({ setOpenUpdate }) => {
  const [openDays, setOpenDays] = useState(false);
  const [openHours, setOpenHours] = useState(false);

  return (
    <div className={styles.upd__container}>
      <div className={styles.upd__content}>
        <span className={styles.upd__return_nav_close}>
          <NavbarReturn title="Agendar cita" />
        </span>

        <h2 className={styles.upd__title_comp}>Actualizar cita</h2>

        <div className={styles.upd__form}>
          <div
            className={styles.upd__select_option}
            onClick={() => setOpenDays(true)}
          >
            <p>Elegir dia</p>
          </div>

          {openDays && (
            <OptionsFilter data={daysAvaible} setOpenFilter={setOpenDays} />
          )}

          <div
            className={styles.upd__select_option}
            onClick={() => setOpenHours(true)}
          >
            <p>Elegir Hora</p>
          </div>

          {openHours && (
            <OptionsFilter data={hoursAvaible} setOpenFilter={setOpenHours} />
          )}

          <div className={styles.upd__price}>
            <h3>Estimar un precio</h3>
            <InputForm
              nameInput="price"
              onChangeF={() => {}}
              placeH="$ 200.000..."
              type="number"
              value=""
            />
          </div>

          <div className={styles.upd__buttons}>
            <ButtonForm title="Agendar" />
            <span onClick={() => setOpenUpdate(false)}>
              <ButtonForm title="Cancelar" colorButton="red" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
