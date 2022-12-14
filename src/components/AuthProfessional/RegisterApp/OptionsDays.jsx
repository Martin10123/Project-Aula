import { daysAvaible } from "../helpers/OptionsProf";

import styles from "./registerApp.module.css";

export const OptionsDays = ({ setOpenDays }) => {
  return (
    <div className={styles.register__content_list}>
      <div
        className={styles.register__background}
        onClick={() => setOpenDays(false)}
      ></div>
      <ul className={styles.register__list}>
        {daysAvaible.map((day) => (
          <li key={day}>{day} </li>
        ))}
      </ul>
    </div>
  );
};
