import PropTypes from "prop-types";

import styles from "./stylesHelpers.module.css";

export const MessageError = ({ helperText = "", error }) => {
  return error && <div className={styles.content_error}>{helperText}</div>;
};

MessageError.propTypes = {
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.string.isRequired,
};
