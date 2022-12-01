import { useState } from "react";

import { AiFillEdit } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineFreeCancellation } from "react-icons/md";
import { FaCommentAlt, FaMoneyCheck } from "react-icons/fa";

import logoApp from "../../../images/LogoApp.png";
import imgPrueba from "../../../images/register.jpg";

import { EditProfile } from "../EditProfile";

import styles from "./profileUser.module.css";

export const ProfileUser = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <section className={styles.profile_user__container}>
      <nav className={styles.profile_user__nav}>
        <img className={styles.profile_user__imgLogo} src={logoApp} alt="" />
        <div className={styles.profile_user__content_menu}>
          <GiHamburgerMenu
            className={styles.profile_user__svg}
            onClick={() => setOpenMenu(!openMenu)}
          />

          <ul
            className={`${styles.profile_user__list} ${
              openMenu ? styles.showMenu : styles.hiddenMenu
            }`}
          >
            <li>
              <BsCalendarDate />
              Mis citas confirmadas
            </li>
            <li>
              <AiFillEdit />
              Actualizar una cita
            </li>
            <li>
              <MdOutlineFreeCancellation />
              Cancelar una cita
            </li>
            <li>
              <FaCommentAlt />
              Mis opiniones
            </li>
            <li>
              <FaMoneyCheck />
              Recargar mi tarjeta
            </li>
            <li>
              <BiLogIn />
              Cerrar cesion
            </li>
          </ul>
        </div>
      </nav>

      <div className={styles.profile_user__content_box_info}>
        <div className={styles.profile_user__box_info_perso_user}>
          <div className={styles.profile_user__data_user}>
            <img
              className={styles.profile_user__imgProfile}
              src={imgPrueba}
              alt="img Prueba"
            />
            <p className={styles.profile_user__name_user}>Martin Elias </p>
            <span className={styles.profile_user__country_year}>
              <p>Colombia</p>
              <p>21 años</p>
            </span>
          </div>
          <div className={styles.profile_user__description_yourself}>
            <h3>Mi biografia</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam, excepturi! Quaerat odit saepe optio ex voluptates
              soluta repudiandae sapiente, laudantium omnis, esse eveniet
              provident laboriosam nulla eum dolorem accusamus qui.
            </p>
          </div>
        </div>
        <hr />
        <div className={styles.profile_user__container_other_data}>
          <div className={styles.profile_user__other_data}>
            <p>
              <span>Telefono:</span> 3002224444
            </p>
            <p>
              <span>Email:</span> Martin@gmail.com
            </p>
            <p>
              <span>Usuario:</span> Martin1012
            </p>
            <p>
              <span>Cumpleaños:</span> 12/junio/2001
            </p>
            <p>
              <span>Sexo:</span> Hombre
            </p>
          </div>

          <EditProfile />
        </div>

        <div className={styles.profile_user__buttons}>
          <button className={styles.profile_user__edit}>Editar datos</button>
          <button className={styles.profile_user__delete}>
            Eliminar cuenta
          </button>
        </div>
      </div>
    </section>
  );
};
