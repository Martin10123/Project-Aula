import { FaCircle } from "react-icons/fa";
import { photoUser } from "../../../images";

import styles from "../pages/chatsApp.module.css";

export const ChatsMessage = ({ setopenChatMessage }) => {
  return (
    <div
      className={styles.chat_message}
      onClick={() => setopenChatMessage(true)}
    >
      <figure className={styles.img_user_message}>
        <img src={photoUser} alt="Foto de perfil" />
        <FaCircle />
      </figure>

      <div className={styles.name_user}>
        <p>Martin Elias</p>
        <p>hace 5 min</p>
      </div>
    </div>
  );
};
