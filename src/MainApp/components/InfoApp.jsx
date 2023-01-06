import { Link } from "react-router-dom";

import { BiShowAlt } from "react-icons/bi";
import { BsCartCheck } from "react-icons/bs";
import { GrSchedule } from "react-icons/gr";
import { MdOutlineSell } from "react-icons/md";

import styles from "../mainPage.module.css";

export const InfoApp = () => {
  return (
    <>
      <div className={styles.info_app}>
        <h2>
          La mejor manera de contratar profesionales para tus reparaciones
          locativas, facil y sencillo sin salir de tu casa.
        </h2>
        <p>
          Bienvenid@s, esta es la pagina principal donde podras agendar tus
          citas con cualquiera de nuestros empleados, facil de usar,
          profesionales capacitados y listos para mostrarle al mundo sus
          habilidades. Podras obtener mas información o ver un breve resumen de
          como funciona nuestra app.
        </p>
        <div className={styles.buttons}>
          <Link to="/appointment/seeProfessionals">
            <button className={styles.button_appo}>Agendar cita</button>
          </Link>
          <Link to="/store">
            <button className={styles.button_see}>Tienda</button>
          </Link>
        </div>
      </div>

      <div className={styles.options}>
        <OptionItem
          Icon={GrSchedule}
          title="Agendar cita"
          linkTo="/appointment/seeProfessionals"
        />
        <OptionItem
          Icon={BiShowAlt}
          title="Ver mis citas"
          linkTo="/appointment/see"
        />
        <OptionItem
          Icon={BsCartCheck}
          title="Comprar productos"
          linkTo="/store"
        />
        <OptionItem
          Icon={MdOutlineSell}
          title="Vender productos"
          linkTo="/store/selfArticle"
        />
      </div>
    </>
  );
};

const OptionItem = ({ Icon, title, linkTo }) => {
  return (
    <Link className={styles.item} to={linkTo}>
      <Icon />
      <p>{title}</p>
    </Link>
  );
};
