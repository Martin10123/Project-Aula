import styles from "./registerApp.module.css";

export const InputForm = ({
  labelName,
  name,
  onChangeF,
  placeholder,
  type,
  value,
}) => {
  return (
    <div className={styles.register__content_inputs}>
      <input
        className={styles.register__input}
        name={name}
        onChange={onChangeF}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </div>
  );
};
