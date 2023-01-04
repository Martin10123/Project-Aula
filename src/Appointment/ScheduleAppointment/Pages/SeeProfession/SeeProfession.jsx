import { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import { homeServices } from "../../../../AuthProfessional";
import { CardProfessional, OptionsFilter } from "../../components";

import styles from "./seeProf.module.css";

export const SeeProfessional = () => {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.nav}>
          <div className={styles.return}>
            <Link to="/home">
              <BsArrowLeft />
            </Link>
            <p>Martin Elias</p>
          </div>

          <div className={styles.money}>
            <p>$50.000</p>
          </div>
        </div>

        <div className={styles.box_text}>
          <input
            type="text"
            className={styles.form_input}
            placeholder="Buscar profesional..."
          />
          <span
            className={styles.span_filter}
            onClick={() => setOpenFilter(true)}
          >
            <p>Filtrar por categoria</p>
          </span>
        </div>

        {openFilter && (
          <OptionsFilter data={homeServices} setOpenFilter={setOpenFilter} />
        )}

        <p className={styles.title_result}>Resultados</p>

        <div className={styles.container_card}>
          <Link to="/appointment/professional/JuanPerez/1234">
            <CardProfessional />
          </Link>
        </div>
      </div>
    </section>
  );
};
