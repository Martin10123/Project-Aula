import { useState } from "react";

import { BsPhoneFill, BsFillMenuButtonWideFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { GiHypersonicMelon } from "react-icons/gi";
import { MdWork, MdAlternateEmail, MdEventAvailable } from "react-icons/md";
import { RiUserSmileFill } from "react-icons/ri";

import { DataPersonal } from "./DataPersonal";
import { NavbarProf } from "./Navbar/Navbar";
import { photoUser } from "../../../images";
import { StatisticsUser } from "./StatisticsUser";

import styles from "./profileProf.module.css";

export const ProfileProf = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <section className={styles.profile__container}>
      <div className={styles.profile__navbar}>
        <BsFillMenuButtonWideFill onClick={() => setOpenMenu(true)} />
      </div>
      <div className={styles.profile__content}>
        <figure className={styles.profile__image_user}>
          <img src={photoUser} alt="Foto de perfil de usuario" />
          <figcaption>Martin Elias</figcaption>
        </figure>

        <StatisticsUser />

        <div className={styles.profile__state_prof}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
            delectus soluta optio harum accusamus labore, praesentium facere eum
            laborum, perspiciatis deleniti voluptates vero placeat quam, autem
            itaque doloribus laboriosam recusandae.
          </p>
        </div>

        <div className={styles.profile__info_personal}>
          <DataPersonal Icon={FaUserTie} title="Nombre" desc="Martin Elias" />

          <DataPersonal Icon={GiHypersonicMelon} title="Apodo" desc="Tinti" />

          <DataPersonal
            Icon={RiUserSmileFill}
            title="Usuario"
            desc="Martin1223"
          />

          <DataPersonal Icon={MdWork} title="Ocupación" desc="Programador" />

          <DataPersonal
            Icon={MdAlternateEmail}
            title="Email"
            desc="martin@gmail.com"
          />

          <DataPersonal Icon={BsPhoneFill} title="Telefono" desc="3006840734" />

          <DataPersonal
            Icon={MdEventAvailable}
            title="Disponibilidad"
            desc="Lunes, Martes, Viernes"
          />
        </div>
      </div>

      <NavbarProf openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </section>
  );
};
