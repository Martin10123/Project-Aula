import { AiOutlineDelete } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";

import styles from "../pages/seeAppointment.module.css";

export const ButtonsCard = () => {
  return (
    <div className={styles.container_buttons}>
      <button>
        <CgProfile />
        <p>Ver perfil</p>
      </button>
      <button>
        <FiEdit />
        <p>Editar cita</p>
      </button>
      <button>
        <AiOutlineDelete />
        <p>Cancelar cita</p>
      </button>
    </div>
  );
};
