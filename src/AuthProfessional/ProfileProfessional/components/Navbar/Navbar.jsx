import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { ListItem } from "./ListItem";

import styles from "./navbarProf.module.css";

export const NavbarProf = ({ openMenu, setOpenMenu }) => {
  return (
    <div
      className={`${styles.container} ${
        openMenu ? styles.show : styles.hidden
      }`}
    >
      <div className={styles.backg} onClick={() => setOpenMenu(false)}></div>
      <div className={styles.content}>
        <p className={styles.name}>Martin Elias</p>
        <hr />

        <ul className={styles.list}>
          <ListItem title="Confirmar cita" />

          <ListItem title="Ver citas confirmadas" />

          <ListItem title="Mis ingresos" />

          <ListItem title="Mensajeria" />
        </ul>

        <div className={styles.buttons}>
          <button>
            <AiOutlineEdit />
            Editar mis datos
          </button>
          <button>
            <AiOutlineDelete />
            Borrar cuenta
          </button>
          <button>
            <BiLogOut />
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};
