import { AiOutlineDelete } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

import styles from "../pages/seeAppointment.module.css";

export const ButtonsCard = () => {
  return (
    <div className={styles.container_buttons}>
      <Link to="/profile">
        <button>
          <CgProfile />
          <p>Ver perfil</p>
        </button>
      </Link>
      <Link to="/appointment/update/12345">
        <button>
          <FiEdit />
          <p>Editar cita</p>
        </button>
      </Link>
      <Link to="/appointment/delete/12345">
        <button>
          <AiOutlineDelete />
          <p>Cancelar cita</p>
        </button>
      </Link>
    </div>
  );
};
