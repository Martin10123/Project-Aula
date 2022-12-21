import { useState } from "react";

import { AiOutlineEdit } from "react-icons/ai";
import { BiShowAlt } from "react-icons/bi";
import { BsCartCheck } from "react-icons/bs";
import { GrSchedule } from "react-icons/gr";
import { MdFreeCancellation } from "react-icons/md";

import { FooterPage } from "./Footer/Footer";
import { LogoApp, photoUser } from "../../images";
import { OptionItem } from "./OptionItem";
import { OptionsUsers } from "./OptionsUser/OptionsUsers";

import styles from "./mainPage.module.css";

export const MainPage = () => {
  const [openUser, setOpenUser] = useState(false);

  return (
    <main className={styles.main__container}>
      <nav className={styles.main__navbar}>
        <img src={LogoApp} alt="Logo de la app" />
        <figure
          className={styles.main__image}
          onClick={() => setOpenUser(!openUser)}
        >
          <img src={photoUser} alt="Foto de perfil" />
          <figcaption>Martin</figcaption>
        </figure>
      </nav>

      {openUser && <OptionsUsers setOpenUser={setOpenUser} />}

      <div className={styles.main__content}>
        <div className={styles.main__info_app}>
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
          <div className={styles.main__buttons}>
            <button className={styles.main__button_appo}>Como funciona?</button>
            <button className={styles.main__button_see}>
              Comprar productos
            </button>
          </div>
        </div>

        <div className={styles.main__options}>
          <OptionItem Icon={GrSchedule} title="Agendar cita" />
          <OptionItem Icon={BiShowAlt} title="Ver mis citas" />
          <OptionItem Icon={AiOutlineEdit} title="Actualizar cita" />
          <OptionItem Icon={MdFreeCancellation} title="Cancelar cita" />
          <OptionItem Icon={BsCartCheck} title="Comprar productos" />
        </div>
      </div>

      <FooterPage />
    </main>
  );
};
