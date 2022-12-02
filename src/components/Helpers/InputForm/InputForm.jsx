const styles = {
  borderRadius: "0.313rem",
  border: "1px solid #887e7e",
  color: "#887e7e",
  fontSize: "1rem",
  height: "3.75rem",
  margin: "0.5rem 0",
  padding: "1rem",
  width: "100%",
};

export const InputForm = ({ nameInput, onChangeF, placeH, type, value }) => {
  return (
    <input
      style={styles}
      name={nameInput}
      type={type}
      placeholder={placeH}
      value={value}
      onChange={onChangeF}
    />
  );
};
