import { useState } from "react";
import { ButtonForm, InputForm } from "../../../Helpers";
import { OptionsDays, OptionsProfession } from "..";

import styles from "../registerApp.module.css";

export const RegisterAppProf = () => {
  const [openDays, setOpenDays] = useState(false);
  const [openProfession, setOpenProfession] = useState(false);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>Registarte y demustra tus habilidades</h2>

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
          <InputForm
            nameInput="email"
            onChangeF={() => {}}
            placeH="Correo..."
            type="email"
            value=""
          />
          <InputForm
            nameInput="phone"
            onChangeF={() => {}}
            placeH="Telefono..."
            type="tel"
            value=""
          />
          <div className={styles.content_passwords}>
            <InputForm
              nameInput="password1"
              onChangeF={() => {}}
              placeH="Contraseña..."
              type="password"
              value=""
            />
            <InputForm
              nameInput="password2"
              onChangeF={() => {}}
              placeH="Confirmar contraseña..."
              type="password"
              value=""
            />
          </div>

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
            <ButtonForm title="Registrarse" />
            <ButtonForm title="Cancelar" colorButton="red" />
          </div>
        </div>
      </div>
    </section>
  );
};
