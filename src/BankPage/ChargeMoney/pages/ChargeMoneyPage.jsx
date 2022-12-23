import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsCreditCard, BsClipboardData } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { MdTransferWithinAStation } from "react-icons/md";

import { ButtonForm } from "../../../Helpers";
import { CardBank, InfoMoney, OptionItem } from "..";
import { photoUser } from "../../../images";

import styles from "../chargeMoney.module.css";

export const ChargeMoneyPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.div_color_back}>
        <div className={styles.inside_background}></div>
      </div>
      <div className={styles.content}>
        <nav className={styles.nav}>
          <div className={styles.image}>
            <img src={photoUser} alt="Foto de perfil usuario" />
            <p>Martin Elias</p>
          </div>
          <FaRegBell className={styles.svgs_nav} />
        </nav>

        <div className={styles.content_all_info}>
          <div className={styles.contains_money_list}>
            <InfoMoney showMessageAccount={true} />

            <div className={styles.content_list_options}>
              <OptionItem Icon={BsCreditCard} name="Nueva Tarjeta" />
              <OptionItem Icon={AiOutlineDollarCircle} name="Recargar" />
              <OptionItem Icon={MdTransferWithinAStation} name="Transferir" />
              <OptionItem Icon={BsClipboardData} name="Ver cuenta" />
            </div>
          </div>
          <div className={styles.transition}>
            <h3>Tus transiciones</h3>

            <div className={styles.list_transition}>
              <CardBank />
            </div>
          </div>
        </div>
        <div className={styles.box_button_logout}>
          <ButtonForm title="Cerrar cesion" colorButton="red" />
        </div>
      </div>
    </section>
  );
};
