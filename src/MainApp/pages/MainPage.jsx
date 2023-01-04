import { useState } from "react";

import { FooterPage, OptionsUsers, InfoApp } from "../components";
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
        <InfoApp />
      </div>

      <FooterPage />
    </main>
  );
};
