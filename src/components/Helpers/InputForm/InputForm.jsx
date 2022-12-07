import PropTypes from "prop-types";

const styles = {
  borderRadius: "0.5rem",
  border: "1px solid #887e7e",
  color: "#887e7e",
  fontSize: "1.1rem",
  height: "3.75rem",
  margin: "0.5rem 0",
  padding: "1rem",
  width: "100%",
};

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
      style={styles}
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
