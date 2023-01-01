import PropTypes from "prop-types";

import styles from "../stylesHelpers.module.css";

export const ButtonForm = ({ title, colorButton = "#0b6efe", onSubmit }) => {
  return (
    <button
      onClick={onSubmit}
      className={styles.buttonForm}
      style={{ background: colorButton }}
    >
      {title}
    </button>
  );
};

ButtonForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
