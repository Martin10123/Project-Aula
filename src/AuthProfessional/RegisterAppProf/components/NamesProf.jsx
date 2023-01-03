import { dataCountrys, InputForm } from "../../../Helpers";
import { OptionsFilter } from "../../../Appointment";

import styles from "../pages/registerApp.module.css";

export const NamesProf = ({
  formState,
  handleChangeFilter,
  onInputChange,
  openCountry,
  setOpenCountry,
  country,
}) => {
  return (
    <>
      <InputForm
        nameInput="name"
        onChangeF={onInputChange}
        placeH="Nombre..."
        type="text"
        value={formState.name}
      />
      <InputForm
        nameInput="username"
        onChangeF={onInputChange}
        placeH="Nombre de usuario..."
        type="text"
        value={formState.username}
      />
      <InputForm
        nameInput="nickName"
        onChangeF={onInputChange}
        placeH="Apodo..."
        type="text"
        value={formState.nickName}
      />
      <InputForm
        nameInput="phone"
        onChangeF={onInputChange}
        placeH="Telefono..."
        type="tel"
        value={formState.phone}
      />

      <div
        className={styles.choose_avaible}
        onClick={() => setOpenCountry(true)}
      >
        <p>{country || "Pais"}</p>
      </div>

      {openCountry && (
        <OptionsFilter
          data={dataCountrys}
          handleChangeFilter={handleChangeFilter}
          id="country"
          setOpenFilter={setOpenCountry}
        />
      )}

      <select
        className={styles.select}
        id="gender"
        name="gender"
        onChange={onInputChange}
        value={formState.gender}
      >
        <option value="Hombre">Hombre</option>
        <option value="Mujer">Mujer</option>
        <option value="Sin especificar">Sin especificar</option>
      </select>
    </>
  );
};
