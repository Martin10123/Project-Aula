import PropTypes from "prop-types";

import styles from "../stylesHelpers.module.css";

export const InputForm = ({
  nameInput,
  onChangeF,
  placeH,
  type,
  value,
  maxLenght,
}) => {
  return (
    <input
      className={styles.inputForm}
      name={nameInput}
      type={type}
      maxLength={maxLenght}
      placeholder={placeH}
      value={value}
      onChange={onChangeF}
    />
  );
};

InputForm.propTypes = {
  nameInput: PropTypes.string.isRequired,
  onChangeF: PropTypes.func.isRequired,
  placeH: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
