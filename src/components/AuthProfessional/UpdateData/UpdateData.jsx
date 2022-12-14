import { useState } from "react";

import { ButtonForm, InputForm } from "../../../Helpers";
import { OptionsDays, OptionsProfession } from "../RegisterApp";

import styles from "./updateData.module.css";

export const UpdateData = () => {
  const [openDays, setOpenDays] = useState(false);
  const [openProfession, setOpenProfession] = useState(false);

  return (
    <section className={styles.update__container}>
      <div className={styles.update__content}>
        <h2>Actualiza tus datos</h2>

        <div className={styles.update__form}>
          <InputForm
            nameInput="name"
            onChangeF={() => {}}
            placeH="Nombre..."
            type="text"
            value=""
          />
          <InputForm
            nameInput="username"
            onChangeF={() => {}}
            placeH="Nombre de usuario..."
            type="text"
            value=""
          />
          <InputForm
            nameInput="nickName"
            onChangeF={() => {}}
            placeH="Apodo..."
            type="text"
            value=""
          />

          <div
            className={styles.update__profession}
            onClick={() => setOpenProfession(true)}
          >
            <p>Escoger profesión</p>
          </div>

          {openProfession && (
            <OptionsProfession setOpenProfession={setOpenProfession} />
          )}

          <div
            className={styles.update__days}
            onClick={() => setOpenDays(true)}
          >
            <p>Escoger dias disponibles</p>
          </div>

          {openDays && <OptionsDays setOpenDays={setOpenDays} />}

          <div className={styles.update__buttons}>
            <ButtonForm title="Actualizar" />
            <ButtonForm title="Cancelar" colorButton="red" />
          </div>
        </div>
      </div>
    </section>
  );
};
