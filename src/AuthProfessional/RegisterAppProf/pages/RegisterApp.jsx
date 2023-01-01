import { useState } from "react";
import { Link } from "react-router-dom";

import { ButtonForm, dataCountrys, InputForm } from "../../../Helpers";
import { daysAvaible, homeServices } from "../../helpers/OptionsProf";
import { OptionsFilter } from "../../../Appointment/ScheduleAppointment/components";
import { useForm } from "../../../hooks/useForm";

import styles from "../registerApp.module.css";

export const RegisterAppProf = () => {
  const [openDays, setOpenDays] = useState(false);
  const [openProfession, setOpenProfession] = useState(false);
  const [openCountry, setOpenCountry] = useState(false);
  const {
    name,
    username,
    nickName,
    email,
    phone,
    password1,
    password2,
    onInputChange,
  } = useForm({
    name: "",
    username: "",
    nickName: "",
    email: "",
    phone: "",
    password1: "",
    password2: "",
  });

  const onSubmitRegister = () => {
    console.log({
      name,
      username,
      nickName,
      email,
      phone,
      password1,
      password2,
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>Registarte y demustra tus habilidades</h2>

        <div className={styles.form}>
          <InputForm
            nameInput="name"
            onChangeF={onInputChange}
            placeH="Nombre..."
            type="text"
            value={name}
          />
          <InputForm
            nameInput="username"
            onChangeF={onInputChange}
            placeH="Nombre de usuario..."
            type="text"
            value={username}
          />
          <InputForm
            nameInput="nickName"
            onChangeF={onInputChange}
            placeH="Apodo..."
            type="text"
            value={nickName}
          />
          <InputForm
            nameInput="email"
            onChangeF={onInputChange}
            placeH="Correo..."
            type="email"
            value={email}
          />
          <InputForm
            nameInput="phone"
            onChangeF={onInputChange}
            placeH="Telefono..."
            type="tel"
            value={phone}
          />
          <div className={styles.content_passwords}>
            <InputForm
              nameInput="password1"
              onChangeF={onInputChange}
              placeH="Contraseña..."
              type="password"
              value={password1}
            />
            <InputForm
              nameInput="password2"
              onChangeF={onInputChange}
              placeH="Confirmar contraseña..."
              type="password"
              value={password2}
            />
          </div>

          <div
            className={styles.profession}
            onClick={() => setOpenCountry(true)}
          >
            <p>Pais</p>
          </div>

          {openCountry && (
            <OptionsFilter data={dataCountrys} setOpenFilter={setOpenCountry} />
          )}

          <div
            className={styles.profession}
            onClick={() => setOpenProfession(true)}
          >
            <p>Escoger profesión</p>
          </div>

          {openProfession && (
            <OptionsFilter
              data={homeServices}
              setOpenFilter={setOpenProfession}
            />
          )}

          <div className={styles.days} onClick={() => setOpenDays(true)}>
            <p>Escoger dias disponibles</p>
          </div>

          {openDays && (
            <OptionsFilter data={daysAvaible} setOpenFilter={setOpenDays} />
          )}

          <div className={styles.buttons}>
            <ButtonForm title="Registrarse" onSubmit={onSubmitRegister} />
          </div>
        </div>
        <p className={styles.redirect_login}>
          ¿Ya tienes una cuenta? <Link to="/auth-prof/login">Ingresar</Link>
        </p>
      </div>
    </section>
  );
};
