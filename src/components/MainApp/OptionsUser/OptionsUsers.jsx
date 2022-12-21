import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";

import styles from "./optionsUsers.module.css";

export const OptionsUsers = ({ setOpenUser }) => {
  return (
    <div className={styles.menu__container}>
      <div className={styles.menu__button_close}>
        <p>Martin Elias</p>
        <p onClick={() => setOpenUser(false)}>X</p>
      </div>

      <ul className={styles.menu__list}>
        <li className={styles.menu__li}>
          <CgProfile />
          <p>Ver perfil</p>
        </li>
        <li className={styles.menu__li}>
          <IoMdNotificationsOutline />
          <p>Notificaciones</p>
        </li>
        <li className={styles.menu__li}>
          <BiLogOut />
          <p>Cerrar cesión</p>
        </li>
      </ul>
    </div>
  );
};
