import { useState } from "react";

import { ButtonForm, InputForm } from "../../Helpers";
import { OptionsDays, OptionsProfession } from "../RegisterAppProf";

import styles from "./updateData.module.css";

export const UpdateData = () => {
  const [openDays, setOpenDays] = useState(false);
  const [openProfession, setOpenProfession] = useState(false);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>Actualiza tus datos</h2>

        <div className={styles.form}>
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
            className={styles.profession}
            onClick={() => setOpenProfession(true)}
          >
            <p>Escoger profesión</p>
          </div>

          {openProfession && (
            <OptionsProfession setOpenProfession={setOpenProfession} />
          )}

          <div className={styles.days} onClick={() => setOpenDays(true)}>
            <p>Escoger dias disponibles</p>
          </div>

          {openDays && <OptionsDays setOpenDays={setOpenDays} />}

          <div className={styles.buttons}>
            <ButtonForm title="Actualizar" />
            <ButtonForm title="Cancelar" colorButton="red" />
          </div>
        </div>
      </div>
    </section>
  );
};
