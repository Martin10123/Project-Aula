import { imgFooter, registerBank } from "../../../images";
import { ButtonForm } from "../../Helpers/ButtonForm/ButtonForm";
import { InputForm } from "../../Helpers/InputForm/InputForm";

import styles from "./registerBank.module.css";

export const RegisterBack = () => {
  return (
    <div className={styles.registerBank__container}>
      <div className={styles.registerBank__content}>
        <figure className={styles.registerBank__image}>
          <img src={registerBank} alt="Logo register" />
        </figure>

        <div className={styles.registerBank__form}>
          <h2>Registrar cuenta bancaria</h2>
          <div className={styles.registerBack__content_input}>
            <InputForm
              nameInput="name"
              onChangeF={() => {}}
              type="text"
              value=""
              placeH="Nombre..."
            />

            <InputForm
              nameInput="lastname"
              onChangeF={() => {}}
              type="text"
              value=""
              placeH="Apellido..."
            />
          </div>

          <InputForm
            nameInput="email"
            onChangeF={() => {}}
            type="email"
            value=""
            placeH="Email..."
          />

          <div className={styles.registerBack__content_input}>
            <InputForm
              nameInput="password1"
              onChangeF={() => {}}
              type="password"
              value=""
              placeH="Contraseña..."
            />

            <InputForm
              nameInput="password2"
              onChangeF={() => {}}
              type="password"
              value=""
              placeH="Confirmar contraseña..."
            />
          </div>

          <select className={styles.registerBank__select}>
            <option value="">Elegir opción</option>
            <option value="Banco Popular">Banco Popular</option>
            <option value="Bancolombia">Bancolombia</option>
            <option value="BBVA">BBVA </option>
            <option value="Banco de Bogotá">Banco de Bogotá</option>
            <option value="Banco Falabella">Banco Falabella</option>
            <option value="Fondo Nacional del Ahorro">
              Fondo Nacional del Ahorro
            </option>
            <option value="Banco Agrario de Colombia">
              Banco Agrario de Colombia
            </option>
            <option value="Banco AV Villas">Banco AV Villas</option>
            <option value="Banco Caja Social">Banco Caja Social</option>
            <option value="Banco de Occidente">Banco de Occidente</option>
          </select>

          <div className={styles.registerBack__content_input}>
            <InputForm
              maxLenght={4}
              nameInput="passwordAccount1"
              onChangeF={() => {}}
              placeH="Contraseña de la cuenta..."
              type="tel"
              value=""
            />

            <InputForm
              maxLenght={4}
              nameInput="passwordAccount2"
              onChangeF={() => {}}
              placeH="Confirmar contraseña de la cuenta..."
              type="tel"
              value=""
            />
          </div>

          <ButtonForm title="Registrarse" />
        </div>
      </div>
    </div>
  );
};
