import { useState } from "react";
import { ChatsApp, ChatMessage } from "..";

import styles from "../ChatsMessage/pages/chatMessage.module.css";

export const MessagesApp = () => {
  const [openChatMessage, setopenChatMessage] = useState(false);

  return (
    <div className={styles.desk_chat_container}>
      <div className={styles.desk_chat_content}>
        <ChatsApp setopenChatMessage={setopenChatMessage} />

        <ChatMessage
          openChatMessage={openChatMessage}
          setopenChatMessage={setopenChatMessage}
        />
      </div>
    </div>
  );
};
