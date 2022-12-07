import PropTypes from "prop-types";

const styles = {
  background: "#0b6efe",
  border: "none",
  borderRadius: "0.313rem",
  color: "#fff",
  cursor: "pointer",
  fontSize: "1.3rem",
  height: "3.75rem",
  margin: "1rem 0",
  width: "100%",
};

export const ButtonForm = ({ title }) => {
  return <button style={styles}>{title}</button>;
};

ButtonForm.propTypes = {
  title: PropTypes.string.isRequired,
};
