import styles from "../Pages/InfoProfessional/infoProf.module.css";

export const CardItem = ({ name, info }) => {
  return (
    <div className={styles.card_item}>
      <span>{name}: </span>
      <p>{info}</p>
    </div>
  );
};
