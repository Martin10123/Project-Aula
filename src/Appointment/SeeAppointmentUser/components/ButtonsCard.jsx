import { AiOutlineDelete } from "react-icons/ai";
import { BsUiChecks } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

import styles from "../pages/seeAppointment.module.css";

export const ButtonsCard = () => {
  return (
    <div className={styles.container_buttons}>
      <button>
        <BsUiChecks />
      </button>
      <button>
        <FiEdit />
      </button>
      <button>
        <AiOutlineDelete />
      </button>
    </div>
  );
};
