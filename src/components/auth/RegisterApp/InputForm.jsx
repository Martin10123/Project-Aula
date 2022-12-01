import PropTypes from "prop-types";
import styles from "./registerApp.module.css";

export const InputForm = ({ name, onChangeF, placeholder, type, value }) => {
  return (
    <input
      className={styles.register__input}
      name={name}
      id={name}
      onChange={onChangeF}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
};

InputForm.propTypes = {
  name: PropTypes.string.isRequired,
  onChangeF: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
