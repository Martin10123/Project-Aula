import { dataCountrys } from "../../../Helpers";

import styles from "../registerApp.module.css";

export const CountryGenderForm = ({ country, gender, onInputChange }) => {
  return (
    <>
      <select
        className={styles.select}
        id="country"
        name="country"
        onChange={onInputChange}
        value={country}
      >
        <option value="">Pais</option>
        {dataCountrys.map((co) => (
          <option key={co} value={co}>
            {co}
          </option>
        ))}
      </select>

      <select
        className={styles.select}
        id="gender"
        name="gender"
        onChange={onInputChange}
        value={gender}
      >
        <option value="Masculino">Hombre</option>
        <option value="Femenino">Mujer</option>
        <option value="Sin especificar">Sin especificar</option>
      </select>
    </>
  );
};
