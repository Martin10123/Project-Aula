import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

import logoApp from "../../../images/LogoApp.png";
import { EditProfile } from "../../EditProfile/EditProfile";
import {
  DataCompleteUser,
  DescriptionYourself,
  InfoPersonalUser,
  OptionsList,
} from "..";

import styles from "../profileUser.module.css";

export const ProfileUser = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openEditProfile, setOpenEditProfile] = useState(false);

  return (
    <>
      <section className={styles.container}>
        <nav className={styles.nav}>
          <img className={styles.imgLogo} src={logoApp} alt="" />
          <div className={styles.content_menu}>
            <GiHamburgerMenu
              className={styles.svg}
              onClick={() => setOpenMenu(!openMenu)}
            />

            <OptionsList openMenu={openMenu} setOpenMenu={setOpenMenu} />
          </div>
        </nav>

        <div className={styles.content_box_info}>
          <div className={styles.box_info_perso_user}>
            <InfoPersonalUser />

            <DescriptionYourself />
          </div>
          <hr />

          <DataCompleteUser />

          <div className={styles.buttons}>
            <button
              className={styles.edit}
              onClick={() => setOpenEditProfile(!openEditProfile)}
            >
              Editar datos
            </button>
            <button className={styles.delete}>Eliminar cuenta</button>
          </div>
        </div>
      </section>

      {openEditProfile && (
        <EditProfile setOpenEditProfile={setOpenEditProfile} />
      )}
    </>
  );
};
