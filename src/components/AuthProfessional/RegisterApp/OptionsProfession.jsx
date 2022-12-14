import { homeServices } from "../helpers/OptionsProf";

import styles from "./registerApp.module.css";

export const OptionsProfession = ({ setOpenProfession }) => {
  return (
    <div className={styles.register__content_list}>
      <div
        className={styles.register__background}
        onClick={() => setOpenProfession(false)}
      ></div>
      <ul className={styles.register__list}>
        {homeServices.map((service) => (
          <li key={service}>{service} </li>
        ))}
      </ul>
    </div>
  );
};
