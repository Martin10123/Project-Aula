import { FaMoneyCheck } from "react-icons/fa";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { AiFillEdit, AiOutlineAppstoreAdd } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { BsCalendarDate, BsBell } from "react-icons/bs";
import { MdOutlineFreeCancellation } from "react-icons/md";

import styles from "../profileUser.module.css";

export const OptionsList = ({ openMenu, setOpenMenu }) => {
  return (
    <ul
      className={`${styles.list} ${
        openMenu ? styles.showMenu : styles.hiddenMenu
      }`}
    >
      <div
        className={styles.background_list}
        onClick={() => setOpenMenu(false)}
      ></div>
      <div className={styles.content_items}>
        <li>
          <AiOutlineAppstoreAdd />
          Agendar cita
        </li>
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
          <FaMoneyCheck />
          Recargar mi tarjeta
        </li>
        <li>
          <HiOutlineChatBubbleLeftRight />
          Mensajes
        </li>
        <li>
          <BsBell />
          Notificaciónes
        </li>
      </div>
      <li className={styles.button_logout}>
        <BiLogIn />
        Cerrar cesion
      </li>
    </ul>
  );
};
