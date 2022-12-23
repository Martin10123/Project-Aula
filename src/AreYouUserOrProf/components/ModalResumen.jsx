import styles from "../userOprof.module.css";

export const ModalResumen = ({ setResumen }) => {
  return (
    <>
      <div className={styles.back_modal}></div>
      <div className={styles.modal_desc}>
        <h2>Resumen</h2>
        <p className={styles.desc}>
          Nuestra aplicación trata de brindar ayudas a las personas, tales que
          contengan un don especial que estén relacionadas a la reparación y al
          mantenimiento locativo, gracias a que en nuestra aplicación podrá
          registrarse, elegir el tipo de servicio que brinda, sus días
          disponibles y los horarios en los que opera, dando a conocer a su
          especialidad a todos los usuarios que utilizan nuestra aplicación y
          así poder encontrar la oportunidad de poner en práctica su
          especialidad. Por otro lado, esta aplicación le brinda la oportunidad
          a las personas de encontrar a cualquier tipo de profesional en varias
          áreas que necesite reparación y mantenimiento en su hogar sin la
          necesidad de salir de su casa. Gracias a la lo ligero y fácil de usar
          que será nuestra aplicación, hará que todas las personas puedan usarla
          con toda comodidad y así ayudar a aquellas que tienen habilidades en
          varias áreas, pero que no se les ha presentado la oportunidad de
          conseguir trabajo en una empresa, o también puede que tenga un
          trabajo, pero que en sus días libres quiera hacer trabajos extras
          apartes.
        </p>

        <button
          className={styles.modal_button}
          onClick={() => setResumen(false)}
        >
          Cerrar
        </button>
      </div>
    </>
  );
};
