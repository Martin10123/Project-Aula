import { daysAvaible } from "../../helpers/OptionsProf";

import styles from "../registerApp.module.css";

export const OptionsDays = ({ setOpenDays }) => {
  return (
    <div className={styles.content_list}>
      <div
        className={styles.background}
        onClick={() => setOpenDays(false)}
      ></div>
      <ul className={styles.list}>
        {daysAvaible.map((day) => (
          <li key={day}>{day} </li>
        ))}
      </ul>
    </div>
  );
};
