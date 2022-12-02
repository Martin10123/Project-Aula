import styles from "./userOprof.module.css";

export const CardChooseOption = ({ Logo, title }) => {
  return (
    <>
      <div className={styles.choose__card_user}>
        <Logo />
        <p>{title}</p>
      </div>
    </>
  );
};
