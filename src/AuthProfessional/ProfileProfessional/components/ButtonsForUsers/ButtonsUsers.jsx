import { BiMessageRounded, BiUpvote, BiDownvote } from "react-icons/bi";

import styles from "./buttonUsers.module.css";

export const ButtonsUsers = () => {
  return (
    <div className={styles.content_buttons}>
      <div className={styles.buttons_votes}>
        <button className={styles.button_vote_good}>
          <BiUpvote />
          Votar
        </button>
        <button className={styles.button_vote_bad}>
          <BiDownvote />
          Votar
        </button>
        <button className={styles.button_message}>
          <BiMessageRounded />
          Contactar
        </button>
        <button className={styles.button_message}>
          <BiMessageRounded />
          Dar opinión
        </button>
      </div>
    </div>
  );
};
