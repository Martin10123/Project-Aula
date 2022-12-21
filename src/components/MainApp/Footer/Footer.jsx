import { facebook, github, gmail, instagram } from "../../../images";
import styles from "./footer.module.css";

export const FooterPage = () => {
  return (
    <footer className={styles.footer__container}>
      <p className={styles.footer__title}>
        Esta aplicación fue creada con fines academicos, intentando llevar a una
        pagina web mi proyecto de aula de segundo semestre
      </p>

      <div className={styles.footer__my_info}>
        <p>Martin Elias</p>
        <p>Martinsimarra@gmail.com</p>
        <p>3006830624</p>
      </div>

      <div className={styles.footer__social_network}>
        <img src={facebook} alt="Facebook" />
        <img src={gmail} alt="Gmail" />
        <img src={instagram} alt="Instagram" />
        <img src={github} alt="Github" />
      </div>
    </footer>
  );
};
