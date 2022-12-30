import { BsArrowLeft } from "react-icons/bs";

import { ChatsActive, ChatsMessage } from "../components";

import styles from "./chatsApp.module.css";

export const ChatsApp = ({ setopenChatMessage }) => {
  return (
    <section className={styles.container_chat}>
      <div className={styles.return_nav}>
        <BsArrowLeft />
        <p>Martin Elias</p>
      </div>

      <div className={styles.content}>
        <input
          type="text"
          placeholder="Buscar..."
          className={styles.filter_input}
        />

        <div className={styles.content_chats_active}>
          <div className={styles.chats_active}>
            <div className={styles.messages__scroll_users}>
              <ChatsActive setopenChatMessage={setopenChatMessage} />
            </div>
          </div>

          <p className={styles.title_message}>Mensajes</p>

          <div className={styles.content_chats_to_message}>
            <ChatsMessage setopenChatMessage={setopenChatMessage} />
            <ChatsMessage setopenChatMessage={setopenChatMessage} />
            <ChatsMessage setopenChatMessage={setopenChatMessage} />
            <ChatsMessage setopenChatMessage={setopenChatMessage} />
            <ChatsMessage setopenChatMessage={setopenChatMessage} />
            <ChatsMessage setopenChatMessage={setopenChatMessage} />
            <ChatsMessage setopenChatMessage={setopenChatMessage} />
            <ChatsMessage setopenChatMessage={setopenChatMessage} />
            <ChatsMessage setopenChatMessage={setopenChatMessage} />
            <ChatsMessage setopenChatMessage={setopenChatMessage} />
            <ChatsMessage setopenChatMessage={setopenChatMessage} />
          </div>
        </div>
      </div>
    </section>
  );
};
