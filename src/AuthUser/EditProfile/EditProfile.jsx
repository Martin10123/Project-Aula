import { ButtonForm, InputForm } from "../../Helpers";
import { NavbarReturn } from "../../BankPage";

import styles from "./editProfile.module.css";

export const EditProfile = ({ setOpenEditProfile }) => {
  return (
    <section className={styles.container}>
      <div className={styles.content_info}>
        <NavbarReturn title="Editar perfil" />
        <form className={styles.form}>
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

          <select className={styles.select} name="gender">
            <option value="Sin especificar">Sin especificar</option>
            <option value="Masculino">Hombre</option>
            <option value="Femenino">Mujer</option>
          </select>

          <textarea name="Biography" placeholder="Actualize su estado" />

          <div className={styles.buttons}>
            <ButtonForm title="Guardar" />
            <ButtonForm title="Cancelar" colorButton="red" />
          </div>
        </form>
      </div>
    </section>
  );
};
