import { FaCircle } from "react-icons/fa";
import { photoUser } from "../../../images";

import styles from "../pages/chatsApp.module.css";

export const ChatsActive = () => {
  return (
    <figure className={styles.image_chat}>
      <img src={photoUser} alt="Foto de perfil" />
      <figcaption>Martin Elias</figcaption>

      <FaCircle />
    </figure>
  );
};
