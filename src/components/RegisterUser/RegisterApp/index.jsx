import { InputForm } from "./InputForm";

import styles from "./registerApp.module.css";

export const RegisterApp = () => {
  return (
    <div className={styles.register__container}>
      <div className={styles.register__content}>
        <h2>Register App</h2>
        <form className={styles.register__form}>
          <InputForm
            labelName="Nombre"
            name="name"
            onChangeF={() => {}}
            type="text"
            value={""}
            placeholder="Ingrese su nombre..."
          />
          <InputForm
            labelName="Apellido"
            name="lastname"
            onChangeF={() => {}}
            type="text"
            value={""}
            placeholder="Ingrese su apellido..."
          />
          <InputForm
            labelName="Nombre de usuario"
            name="username"
            onChangeF={() => {}}
            type="text"
            value={""}
            placeholder="Ingrese un nombre de usuario..."
          />

          <div className={styles.register__button}>
            <button>Siguiente</button>
          </div>
        </form>
      </div>
    </div>
  );
};
