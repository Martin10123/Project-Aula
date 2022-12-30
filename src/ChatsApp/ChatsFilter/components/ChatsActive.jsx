import { FaCircle } from "react-icons/fa";
import { photoUser } from "../../../images";

import styles from "../pages/chatsApp.module.css";

export const ChatsActive = ({ setopenChatMessage }) => {
  return (
    <figure
      className={styles.image_chat}
      onClick={() => setopenChatMessage(true)}
    >
      <img src={photoUser} alt="Foto de perfil" />
      <figcaption>Martin Elias</figcaption>

      <FaCircle />
    </figure>
  );
};
