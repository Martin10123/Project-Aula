import { dataCountrys } from "../../../Helpers";

import styles from "../registerApp.module.css";

export const CountryGenderForm = ({
  formState,

  onInputChange,
}) => {
  const { country, gender } = formState;

  return (
    <>
      <select
        className={styles.select}
        id="country"
        name="country"
        onChange={onInputChange}
        value={country}
      >
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
