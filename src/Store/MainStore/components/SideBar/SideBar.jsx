import { AiFillHome } from "react-icons/ai";
import { BsTags, BsBank } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { HiOutlineViewGridAdd } from "react-icons/hi";

import { ListItem } from "./ListItem";
import { photoUser } from "../../../../images";

import styles from "./sideBar.module.css";

export const SideBar = ({ openSideBar, setOpenSideBar }) => {
  return (
    <div
      className={`${styles.container_side} ${
        openSideBar ? styles.show_side : ""
      }`}
    >
      <div
        className={styles.back_color}
        onClick={() => setOpenSideBar(false)}
      ></div>
      <div className={styles.list}>
        <figure className={styles.image_user}>
          <img src={photoUser} alt="Foto de perfil" />
          <figcaption>Martin Elias</figcaption>
        </figure>

        <div className={styles.content_all_item}>
          <ListItem Icon={BsTags} title="Vender articulo" />
          <ListItem Icon={FcLike} title="Mis favoritos" />
          <ListItem Icon={AiFillHome} title="Home" />
          <ListItem Icon={HiOutlineViewGridAdd} title="Agendar cita" />
          <ListItem Icon={BsBank} title="Banco" />
          <ListItem Icon={CgProfile} title="Ver perfil" />
        </div>
        <div className={styles.last_item}>
          <button className={styles.button_logout}>
            <CiLogout />
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};
