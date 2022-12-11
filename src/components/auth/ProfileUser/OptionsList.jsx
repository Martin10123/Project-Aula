import { AiFillEdit } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { FaCommentAlt, FaMoneyCheck } from "react-icons/fa";
import { MdOutlineFreeCancellation } from "react-icons/md";

import styles from "./profileUser.module.css";

export const OptionsList = ({ openMenu, setOpenMenu }) => {
  return (
    <ul
      className={`${styles.profile_user__list} ${
        openMenu ? styles.showMenu : styles.hiddenMenu
      }`}
    >
      <div
        className={styles.profile_user__background_list}
        onClick={() => setOpenMenu(false)}
      ></div>
      <div className={styles.profile_user__content_items}>
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
      </div>
    </ul>
  );
};
