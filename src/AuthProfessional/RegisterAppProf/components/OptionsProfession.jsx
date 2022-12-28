import { homeServices } from "../../helpers/OptionsProf";

import styles from "../registerApp.module.css";

export const OptionsProfession = ({ setOpenProfession }) => {
  return (
    <div className={styles.content_list}>
      <div
        className={styles.background}
        onClick={() => setOpenProfession(false)}
      ></div>
      <ul className={styles.list}>
        {homeServices.map((service) => (
          <li key={service}>{service} </li>
        ))}
      </ul>
    </div>
  );
};
