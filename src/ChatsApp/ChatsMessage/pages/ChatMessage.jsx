import {
  BsArrowLeft,
  BsCameraVideo,
  BsFillCameraFill,
  BsTelephone,
} from "react-icons/bs";
import { MdOutlineAddReaction } from "react-icons/md";
import { TbMicrophone } from "react-icons/tb";

import { photoUser } from "../../../images";

import styles from "./chatMessage.module.css";

export const ChatMessage = ({ openChatMessage, setopenChatMessage }) => {
  const openChat = openChatMessage ? "" : styles.hidden_component;

  return (
    <div className={`${styles.container} ${openChat}`}>
      <div className={styles.content}>
        <div className={styles.nav_message}>
          <div className={styles.image_user}>
            <BsArrowLeft onClick={() => setopenChatMessage(false)} />

            <img src={photoUser} alt="Foto de perfil" />

            <span className={styles.name_user}>
              <p>Martin Elias</p>
              <p>Hace 3 min</p>
            </span>
          </div>

          <div className={styles.content_mobile}>
            <BsTelephone />
            <BsCameraVideo />
          </div>
        </div>

        <div className={styles.messages_users}>
          <div className={styles.message_left}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              labore veritatis harum suscipit corrupti deserunt perferendis
              corporis optio blanditiis. Inventore fuga earum, voluptatum sit
              non facere ipsa error sint sunt.
            </p>
          </div>
          <div className={styles.message_right}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              labore veritatis harum suscipit corrupti deserunt perferendis
              corporis optio blanditiis. Inventore fuga earum, voluptatum sit
              non facere ipsa error sint sunt.
            </p>
          </div>
        </div>

        <div className={styles.form_input}>
          <div className={styles.input_div}>
            <div className={styles.camera_send_photo}>
              <BsFillCameraFill className={styles.svg_input} />
            </div>
            <input
              type="text"
              placeholder="Enviar un mensaje..."
              className={styles.input_form_value}
            />

            <div className={styles.content_other_svg}>
              <TbMicrophone className={styles.svg_input} />
              <MdOutlineAddReaction className={styles.svg_input} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
