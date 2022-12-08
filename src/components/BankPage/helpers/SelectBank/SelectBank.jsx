import { bankNames } from "../BankNames";

import styles from "../stylesHelpers.module.css";

export const SelectBank = () => {
  return (
    <select name="" className={styles.selectBank}>
      <option value="">Escoger banco</option>
      {bankNames.map(({ name }) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};
