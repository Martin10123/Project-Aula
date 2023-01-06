import { useState } from "react";
import { facebook, github, gmail, instagram, whatsapp } from "../../../images";
import styles from "./footer.module.css";

export const FooterPage = () => {
  const [copy, setCopy] = useState("");

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText("Martinsimarra4@gmail.com");

      setCopy("Se copio el texto");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <footer className={styles.container}>
      <p className={styles.title}>
        Esta aplicación fue creada con fines academicos, intentando llevar a una
        pagina web mi proyecto de aula de segundo semestre
      </p>

      <div className={styles.my_info}>
        <p>Martin Elias</p>
        <p>Martinsimarra@gmail.com</p>
        <p>3006830624</p>
      </div>

      <div className={styles.social_network}>
        <a href="https://www.facebook.com/Martin101206" target="_blank">
          <img src={facebook} alt="Facebook" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=3006830624&text=Hola%20mucho%20gusto"
          target="_blank"
        >
          <img src={whatsapp} alt="Gmail" />
        </a>

        <a href="https://www.instagram.com/martinelias1012/" target="_blank">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://github.com/Martin10123" target="_blank">
          <img src={github} alt="Github" />
        </a>
      </div>
    </footer>
  );
};
