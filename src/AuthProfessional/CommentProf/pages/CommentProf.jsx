import { BsArrowLeft } from "react-icons/bs";

import { CardComment, WritteComment } from "../components";

import styles from "../commentProf.module.css";

export const CommentProf = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.nav_return}>
          <BsArrowLeft />
          <span className={styles.name_prof}>
            <p>Luis Perez</p>
            <p>Albañil</p>
          </span>
        </div>

        <WritteComment />

        <div className={styles.filter_opinions}>
          <p>Todas</p>
          <p>Positivas</p>
          <p>Negativas</p>
        </div>

        <div className={styles.box_comments}>
          <CardComment />
        </div>
      </div>
    </section>
  );
};
