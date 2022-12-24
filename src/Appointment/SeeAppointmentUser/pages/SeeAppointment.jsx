import { AiFillHome, AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { CardSeeAppoi } from "../components";

import styles from "./seeAppointment.module.css";

export const SeeAppointment = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.nav}>
          <div className={styles.nav_title}>
            <AiFillHome />
            <p>Tus citas</p>
          </div>

          <div className={styles.form_search}>
            <input
              type="text"
              placeholder="Buscar..."
              className={styles.form_input}
            />
          </div>

          <div className={styles.other_options}>
            <BsBell />
            <AiOutlineAppstoreAdd />
          </div>
        </div>

        <CardSeeAppoi />
      </div>
    </section>
  );
};
