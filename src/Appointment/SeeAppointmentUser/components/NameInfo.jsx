import styles from "../pages/seeAppointment.module.css";

export const SelectAppoi = ({ info }) => {
  return (
    <div className={styles.appoi_select}>
      <p>{info}</p>
    </div>
  );
};
