import styles from "../commentProf.module.css";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const WritteComment = () => {
  return (
    <div className={styles.textarea_opinion}>
      <textarea name="" placeholder="Deja tu comentario..." />
      <div className={styles.select_calif}>
        {numbers.map((number) => (
          <div key={number} className={styles.select_calif_li}>
            <p>{number}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
