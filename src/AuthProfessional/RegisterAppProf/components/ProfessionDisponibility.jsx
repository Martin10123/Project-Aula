import { OptionsFilter } from "../../../Appointment";
import { dataCountrys, MessageError } from "../../../Helpers";
import { daysAvaible, homeServices } from "../../helpers/OptionsProf";

import styles from "../pages/registerApp.module.css";

export const ProfessionDisponibility = ({
  daysValue,
  formState,
  formSubmitted,
  handleChangeFilter,
  onInputChange,
  openOptionsDays,
  openOptionsProfession,
  professionValue,
  setOpenOptionsDays,
  setOpenOptionsProfession,
}) => {
  return (
    <>
      <select
        className={styles.select}
        id="country"
        name="country"
        onChange={onInputChange}
        value={formState.country}
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
        value={formState.gender}
      >
        <option value="Masculino">Hombre</option>
        <option value="Femenino">Mujer</option>
        <option value="Sin especificar">Sin especificar</option>
      </select>

      <div className={styles.content_together}>
        <div>
          <div
            className={styles.choose_avaible}
            onClick={() => setOpenOptionsProfession(true)}
          >
            <p>{professionValue || "Escoger profesión"}</p>
          </div>

          <MessageError
            error={professionValue === "" && formSubmitted}
            helperText={"Escoge una professión"}
          />
        </div>

        {openOptionsProfession && (
          <OptionsFilter
            data={homeServices}
            id="profession"
            handleChangeFilter={handleChangeFilter}
            setOpenFilter={setOpenOptionsProfession}
            choosedBefore={[professionValue]}
          />
        )}

        <div>
          <div
            className={styles.choose_avaible}
            onClick={() => setOpenOptionsDays(true)}
          >
            <p>
              {daysValue.length > 0
                ? `Escogiste ${daysValue.length} dias`
                : "Escoger dias disponibles"}
            </p>
          </div>

          <MessageError
            error={daysValue.length === 0 && formSubmitted}
            helperText={"Escoge tus dias disponibles"}
          />
        </div>
        {openOptionsDays && (
          <OptionsFilter
            data={daysAvaible}
            id="days"
            handleChangeFilter={handleChangeFilter}
            setOpenFilter={setOpenOptionsDays}
            choosedBefore={[...daysValue]}
          />
        )}
      </div>
    </>
  );
};
