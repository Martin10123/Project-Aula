import { IoMdArrowBack } from "react-icons/io";

import styles from "./editProfile.module.css";

export const EditProfile = () => {
  return (
    <section className={styles.editProfile__container}>
      <div className={styles.editProfile__content_info}>
        <div className={styles.editProfile__nav}>
          <IoMdArrowBack />
          <p>Editar tu perfil</p>
        </div>
        <form className={styles.editProfile__form}>
          <input type="text" name="name" placeholder="Nombre..." />
          <input type="text" name="lastname" placeholder="Apellido..." />
          <input
            type="text"
            name="username"
            placeholder="Nombre de usuario..."
          />

          <select className={styles.editProfile__select} name="gender">
            <option value="Masculino">Hombre</option>
            <option value="Femenino">Mujer</option>
            <option value="Sin especificar">Sin especificar</option>
          </select>

          <textarea name="Biography" placeholder="Actualize su estado" />

          <div className={styles.editProfile__buttons}>
            <button className={styles.editProfile__sava}>Guardar</button>
            <button className={styles.editProfile__cancel}>Cancelar</button>
          </div>
        </form>
      </div>
    </section>
  );
};
