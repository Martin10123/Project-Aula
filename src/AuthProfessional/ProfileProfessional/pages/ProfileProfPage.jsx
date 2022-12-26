import { useState } from "react";

import { BsPhoneFill, BsFillMenuButtonWideFill } from "react-icons/bs";
import { FaUserTie, FaCity } from "react-icons/fa";
import { GiHypersonicMelon } from "react-icons/gi";
import { MdWork, MdAlternateEmail, MdEventAvailable } from "react-icons/md";
import { RiUserSmileFill } from "react-icons/ri";

import { ButtonsUsers, DataPersonal, NavbarProf, StatisticsUser } from "..";
import { photoUser } from "../../../images";

import styles from "../profileProf.module.css";

export const ProfileProf = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <section className={styles.container}>
      <div className={styles.navbar}>
        <BsFillMenuButtonWideFill onClick={() => setOpenMenu(true)} />
      </div>
      <div className={styles.content}>
        <figure className={styles.image_user}>
          <img src={photoUser} alt="Foto de perfil de usuario" />
          <figcaption>Martin Elias</figcaption>
        </figure>

        <StatisticsUser />

        <div className={styles.state_prof}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
            delectus soluta optio harum accusamus labore, praesentium facere eum
            laborum, perspiciatis deleniti voluptates vero placeat quam, autem
            itaque doloribus laboriosam recusandae.
          </p>
        </div>

        <div className={styles.info_personal}>
          <DataPersonal Icon={FaUserTie} title="Nombre" desc="Martin Elias" />

          <DataPersonal Icon={GiHypersonicMelon} title="Apodo" desc="Tinti" />

          <DataPersonal
            Icon={RiUserSmileFill}
            title="Usuario"
            desc="Martin1223"
          />

          <DataPersonal Icon={FaCity} title="Pais" desc="Colombia" />

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

        <ButtonsUsers />
      </div>

      <NavbarProf openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </section>
  );
};
