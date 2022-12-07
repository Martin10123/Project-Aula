import { AiOutlineDollarCircle } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { BsCreditCard, BsClipboardData } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { MdTransferWithinAStation } from "react-icons/md";

import { CardBank } from "./CardBank";
import { InfoMoney } from "./InfoMoney";
import { OptionItem } from "./OptionItem";
import { photoUser } from "../../../images";

import styles from "./chargeMoney.module.css";

export const ChargeMoneyPage = () => {
  return (
    <section className={styles.chargeMoney__container}>
      <div className={styles.chargeMoney__div_color_back}>
        <div className={styles.chargeMoney__inside_background}></div>
      </div>
      <div className={styles.chargeMoney__content}>
        <nav className={styles.chargeMoney__nav}>
          <div className={styles.chargeMoney__image}>
            <img src={photoUser} alt="Foto de perfil usuario" />
            <p>Martin Elias</p>
          </div>
          <FaRegBell className={styles.chargeMoney__svgs_nav} />
        </nav>

        <div className={styles.chargeMoney__content_all_info}>
          <div className={styles.chargeMoney__contains_money_list}>
            <InfoMoney showMessageAccount={true} />

            <div className={styles.chargeMoney__content_list_options}>
              <OptionItem Icon={BsCreditCard} name="Nueva Tarjeta" />
              <OptionItem Icon={AiOutlineDollarCircle} name="Recargar" />
              <OptionItem Icon={MdTransferWithinAStation} name="Transferir" />
              <OptionItem Icon={BsClipboardData} name="Ver cuenta" />
            </div>
          </div>
          <div className={styles.chargeMoney__transition}>
            <h3>Tus transiciones</h3>

            <div className={styles.chargeMoney__list_transition}>
              <CardBank />
            </div>
          </div>
        </div>
        <div className={styles.chargeMoney__box_button_logout}>
          <button>
            <BiLogOut />
            Cerrar sesión
          </button>
        </div>
      </div>
    </section>
  );
};
