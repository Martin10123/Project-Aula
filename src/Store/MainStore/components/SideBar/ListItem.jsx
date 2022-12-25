import styles from "./sideBar.module.css";

export const ListItem = ({ Icon, title }) => {
  return (
    <div className={styles.list_item}>
      <Icon />
      <p>{title}</p>
    </div>
  );
};
