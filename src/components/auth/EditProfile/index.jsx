import { ButtonForm, InputForm } from "../../../Helpers";
import { NavbarReturn } from "../../BankPage/helpers/NavbarReturn/NavbarReturn";

import styles from "./editProfile.module.css";

export const EditProfile = ({ setOpenEditProfile }) => {
  return (
    <section className={styles.editProfile__container}>
      <div className={styles.editProfile__content_info}>
        <NavbarReturn title="Editar perfil" />
        <form className={styles.editProfile__form}>
          <InputForm
            nameInput="name"
            onChangeF={() => {}}
            placeH="Nombre..."
            type="text"
            value=""
          />
          <InputForm
            nameInput="lastname"
            onChangeF={() => {}}
            placeH="Apellido..."
            type="text"
            value=""
          />
          <InputForm
            nameInput="username"
            onChangeF={() => {}}
            placeH="Nombre de usuario..."
            type="text"
            value=""
          />

          <select className={styles.editProfile__select} name="gender">
            <option value="Sin especificar">Sin especificar</option>
            <option value="Masculino">Hombre</option>
            <option value="Femenino">Mujer</option>
          </select>

          <textarea name="Biography" placeholder="Actualize su estado" />

          <div className={styles.editProfile__buttons}>
            <ButtonForm title="Guardar" />
            <ButtonForm title="Cancelar" colorButton="red" />
          </div>
        </form>
      </div>
    </section>
  );
};
