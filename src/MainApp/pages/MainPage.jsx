import { useState } from "react";

import { AiOutlineEdit } from "react-icons/ai";
import { BiShowAlt } from "react-icons/bi";
import { BsCartCheck } from "react-icons/bs";
import { GrSchedule } from "react-icons/gr";
import { MdFreeCancellation, MdOutlineSell } from "react-icons/md";

import { FooterPage, OptionItem, OptionsUsers } from "..";
import { LogoApp, photoUser } from "../../images";

import styles from "../mainPage.module.css";

export const MainPage = () => {
  const [openUser, setOpenUser] = useState(false);

  return (
    <main className={styles.container}>
      <nav className={styles.navbar}>
        <img src={LogoApp} alt="Logo de la app" />
        <figure className={styles.image} onClick={() => setOpenUser(!openUser)}>
          <img src={photoUser} alt="Foto de perfil" />
          <figcaption>Martin</figcaption>
        </figure>
      </nav>

      {openUser && <OptionsUsers setOpenUser={setOpenUser} />}

      <div className={styles.content}>
        <div className={styles.info_app}>
          <h2>
            La mejor manera de contratar profesionales para tus reparaciones
            locativas, facil y sencillo sin salir de tu casa.
          </h2>
          <p>
            Bienvenid@s, esta es la pagina principal donde podras agendar tus
            citas con cualquiera de nuestros empleados, facil de usar,
            profesionales capacitados y listos para mostrarle al mundo sus
            habilidades. Podras obtener mas información o ver un breve resumen
            de como funciona nuestra app.
          </p>
          <div className={styles.buttons}>
            <button className={styles.button_appo}>Como funciona?</button>
            <button className={styles.button_see}>Comprar productos</button>
          </div>
        </div>

        <div className={styles.options}>
          <OptionItem Icon={GrSchedule} title="Agendar cita" />
          <OptionItem Icon={BiShowAlt} title="Ver mis citas" />
          <OptionItem Icon={AiOutlineEdit} title="Actualizar cita" />
          <OptionItem Icon={MdFreeCancellation} title="Cancelar cita" />
          <OptionItem Icon={BsCartCheck} title="Comprar productos" />
          <OptionItem Icon={MdOutlineSell} title="Vender productos" />
        </div>
      </div>

      <FooterPage />
    </main>
  );
};
