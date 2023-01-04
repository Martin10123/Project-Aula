import { photoUser } from "../../../../images";
import { NavbarReturn } from "../../../../BankPage/helpers";
import { CardItem } from "../../components";
import { Link, useNavigate } from "react-router-dom";

import styles from "./infoProf.module.css";

export const InfoProfessional = () => {
  const navigate = useNavigate();

  const returnHome = () => {
    navigate(-1);
  };

  return (
    <div className={styles.screen_prof_select}>
      <NavbarReturn title="Martin Elias" onNavigate={returnHome} />
      <div className={styles.content_prof_select}>
        <div className={styles.content_info_prof_select}>
          <figure className={styles.img_professional}>
            <img src={photoUser} alt="Foto de perfil del profesional" />
            <figcaption>Luis Perez</figcaption>
          </figure>

          <div className={styles.card_contain_all_info_prof}>
            <div className={styles.card_other_info}>
              <CardItem name="ID profesional" info="123433443" />
              <CardItem name="Ocupación" info="Albañil" />
              <CardItem name="Email" info="martin@gmail.com" />
              <CardItem name="Telefono" info="000-000-0000" />
              <CardItem name="Apodo" info="El calvo" />
              <CardItem name="Dias disponibles" info="Lunes, Martes, Jueves" />
              <CardItem name="Total" info="$20.000" />
            </div>

            <div className={styles.card_buttons}>
              <Link to="/appointment/schedule">Agendar cita</Link>
              <Link to="/JuanPerez102">Ver perfil</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
