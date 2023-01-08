import PropTypes from "prop-types";

import styles from "../stylesHelpers.module.css";

export const ButtonForm = ({
  disabled,
  title,
  colorButton = "#0b6efe",
  onSubmit,
}) => {
  return (
    <button
      disabled={disabled}
      type="submit"
      onClick={onSubmit}
      className={styles.buttonForm}
      style={{ background: colorButton }}
    >
      {title}
    </button>
  );
};

ButtonForm.propTypes = {
  disabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
};
