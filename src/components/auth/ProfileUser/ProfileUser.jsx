import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

import logoApp from "../../../images/LogoApp.png";
import { EditProfile } from "../EditProfile";
import {
  DataCompleteUser,
  DescriptionYourself,
  InfoPersonalUser,
  OptionsList,
} from "./";

import styles from "./profileUser.module.css";

export const ProfileUser = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openEditProfile, setOpenEditProfile] = useState(false);

  return (
    <>
      <section className={styles.profile_user__container}>
        <nav className={styles.profile_user__nav}>
          <img className={styles.profile_user__imgLogo} src={logoApp} alt="" />
          <div className={styles.profile_user__content_menu}>
            <GiHamburgerMenu
              className={styles.profile_user__svg}
              onClick={() => setOpenMenu(!openMenu)}
            />

            <OptionsList openMenu={openMenu} setOpenMenu={setOpenMenu} />
          </div>
        </nav>

        <div className={styles.profile_user__content_box_info}>
          <div className={styles.profile_user__box_info_perso_user}>
            <InfoPersonalUser />

            <DescriptionYourself />
          </div>
          <hr />

          <DataCompleteUser />

          <div className={styles.profile_user__buttons}>
            <button
              className={styles.profile_user__edit}
              onClick={() => setOpenEditProfile(!openEditProfile)}
            >
              Editar datos
            </button>
            <button className={styles.profile_user__delete}>
              Eliminar cuenta
            </button>
          </div>
        </div>
      </section>

      {openEditProfile && (
        <EditProfile setOpenEditProfile={setOpenEditProfile} />
      )}
    </>
  );
};
