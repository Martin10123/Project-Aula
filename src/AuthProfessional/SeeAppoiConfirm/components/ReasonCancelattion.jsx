import styles from "../seeAppoiConfirm.module.css";

const reasonCancelattion = [
  "Imprevistos de última hora",
  "Problema de salud",
  "Decisión propia",
  "Indisponibilidad del servicio",
  "Confusión sobre la fecha/hora",
  "Problemas para llegar hasta alla",
];

export const ReasonCancelattion = ({ setOpenReasons }) => {
  return (
    <div className={styles.re_container}>
      <div className={styles.re_list}>
        <h2>¿Por que la cancelas?</h2>

        {reasonCancelattion.map((reason) => (
          <div key={reason} className={styles.re_li}>
            <p>{reason}</p>
            <span className={styles.re_point}></span>
          </div>
        ))}

        <div className={styles.re_form}>
          <textarea name="" placeholder="Explicar tu problema..." />

          <div className={styles.re_buttons}>
            <button>Aceptar</button>
            <button onClick={() => setOpenReasons(false)}>Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
