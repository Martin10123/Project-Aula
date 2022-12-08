import PropTypes from "prop-types";

import styles from "../stylesHelpers.module.css";

export const ButtonForm = ({ title, colorButton = "#0b6efe" }) => {
  return (
    <button className={styles.buttonForm} style={{ background: colorButton }}>
      {title}
    </button>
  );
};

ButtonForm.propTypes = {
  title: PropTypes.string.isRequired,
};
