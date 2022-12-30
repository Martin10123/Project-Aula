import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

import styles from "../commentProf.module.css";

export const ButtonsComment = () => {
  return (
    <div className={styles.buttons}>
      <div className={styles.content_reaction}>
        <button>
          <FcLike />
        </button>
        <p>1</p>
      </div>
      <div className={styles.content_reaction}>
        <button>
          <FcLikePlaceholder />
        </button>
        <p>1</p>
      </div>

      <button>
        <AiFillEdit />
      </button>

      <button>
        <AiFillDelete />
      </button>
    </div>
  );
};
