import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";

import styles from "./optionsUsers.module.css";

export const OptionsUsers = ({ setOpenUser }) => {
  return (
    <div className={styles.container}>
      <div className={styles.button_close}>
        <p>Martin Elias</p>
        <p onClick={() => setOpenUser(false)}>X</p>
      </div>

      <ul className={styles.list}>
        <li className={styles.li}>
          <CgProfile />
          <p>Ver perfil</p>
        </li>
        <li className={styles.li}>
          <IoMdNotificationsOutline />
          <p>Notificaciones</p>
        </li>
        <li className={styles.li}>
          <BiLogOut />
          <p>Cerrar cesión</p>
        </li>
      </ul>
    </div>
  );
};
