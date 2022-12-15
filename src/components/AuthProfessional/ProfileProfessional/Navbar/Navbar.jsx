import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { ListItem } from "./ListItem";

import styles from "./navbarProf.module.css";

export const NavbarProf = ({ openMenu, setOpenMenu }) => {
  return (
    <div
      className={`${styles.nav__container} ${
        openMenu ? styles.nav__show : styles.nav__hidden
      }`}
    >
      <div
        className={styles.nav__backg}
        onClick={() => setOpenMenu(false)}
      ></div>
      <div className={styles.nav__content}>
        <p className={styles.nav__name}>Martin Elias</p>
        <hr />

        <ul className={styles.nav__list}>
          <ListItem title="Confirmar cita" />

          <ListItem title="Ver citas confirmadas" />

          <ListItem title="Opiniones sobre mi" />

          <ListItem title="Mis ingresos" />

          <ListItem title="Cancelar cita" />

          <ListItem title="Comunicarme con un cliente" />
        </ul>

        <div className={styles.nav__buttons}>
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
