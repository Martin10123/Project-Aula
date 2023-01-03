import { OptionsFilter } from "../../../Appointment";
import { daysAvaible, homeServices } from "../../helpers/OptionsProf";
import styles from "../pages/registerApp.module.css";

export const AvaibleProf = ({
  handleChangeFilter,
  openDays,
  openProfession,
  profession,
  setOpenDays,
  setOpenProfession,
}) => {
  return (
    <>
      <div
        className={styles.choose_avaible}
        onClick={() => setOpenProfession(true)}
      >
        <p>{profession || "Escoger profesión"}</p>
      </div>

      {openProfession && (
        <OptionsFilter
          data={homeServices}
          handleChangeFilter={handleChangeFilter}
          id="profession"
          setOpenFilter={setOpenProfession}
        />
      )}

      <div className={styles.choose_avaible} onClick={() => setOpenDays(true)}>
        <p>Escoger dias disponibles</p>
      </div>

      {openDays && (
        <OptionsFilter
          data={daysAvaible}
          handleChangeFilter={handleChangeFilter}
          id="days"
          setOpenFilter={setOpenDays}
        />
      )}
    </>
  );
};
