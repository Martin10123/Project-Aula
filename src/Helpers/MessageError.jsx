import PropTypes from "prop-types";

import styles from "./stylesHelpers.module.css";

export const MessageError = ({ helperText = "", error }) => {
  return error && <div className={styles.content_error}>{helperText}</div>;
};

MessageError.propTypes = {
  helperText: PropTypes.string.isRequired,
};
