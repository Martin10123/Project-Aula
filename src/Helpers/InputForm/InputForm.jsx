import PropTypes from "prop-types";
import { MessageError } from "../MessageError";

import styles from "../stylesHelpers.module.css";

export const InputForm = ({
  error,
  helperText,
  maxLenght,
  nameInput,
  onChangeF,
  placeH,
  type,
  value,
}) => {
  return (
    <div className={styles.form_input}>
      <input
        className={styles.inputForm}
        name={nameInput}
        type={type}
        maxLength={maxLenght}
        placeholder={placeH}
        value={value}
        onChange={onChangeF}
      />
      <MessageError helperText={helperText} error={error} />
    </div>
  );
};

InputForm.propTypes = {
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.string.isRequired,
  nameInput: PropTypes.string.isRequired,
  onChangeF: PropTypes.func.isRequired,
  placeH: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
