import { BiMailSend, BiLogOut } from "react-icons/bi";
import { BsCreditCard, BsClipboardData } from "react-icons/bs";

import { bankBackgro, bankMoney, photoUser } from "../../../images";
import { CardBank } from "./CardBank";
import { FaRegBell } from "react-icons/fa";
import { HiEllipsisVertical } from "react-icons/hi2";

import styles from "./chargeMoney.module.css";

export const ChargeMoney = () => {
  return (
    <section className={styles.chargeMoney__container}>
      <div className={styles.chargeMoney__content}>
        <nav className={styles.chargeMoney__nav}>
          <div className={styles.chargeMoney__image}>
            <img src={photoUser} alt="Foto de perfil usuario" />
            <span className={styles.chargeMoney__span_name}>
              <p>Martin Elias</p>
              <p>Banco: Davivienda</p>
            </span>
          </div>
          <div className={styles.chargeMoney__svgs_nav}>
            <FaRegBell />
            <HiEllipsisVertical />
            <div className={styles.chargeMoney__options_ellip}>
              <div className={styles.chargeMoney__back_trans}></div>
              <div className={styles.chargeMoney__content_list_options}>
                <div className={styles.chargeMoney__list_option}>
                  <BsCreditCard />
                  <p>Recargar</p>
                </div>
                <div className={styles.chargeMoney__list_option}>
                  <BiMailSend />
                  <p>Envia amigo</p>
                </div>
                <div className={styles.chargeMoney__list_option}>
                  <BsClipboardData />
                  <p>Ver datos</p>
                </div>
                <div className={styles.chargeMoney__list_option}>
                  <BiLogOut />
                  <p>Cerrar cesion</p>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className={styles.chargeMoney__content_all_info}>
          <div className={styles.chargeMoney__money_avaible}>
            <h3>Montón disponible</h3>
            <img src={bankMoney} alt="" />
            <p>$2.556.000</p>
          </div>

          <img
            className={styles.chargeMoney__backgroup_transition}
            src={bankBackgro}
            alt=""
          />

          <div className={styles.chargeMoney__transition}>
            <h2>Tus transiciones</h2>

            <div className={styles.chargeMoney__list_transition}>
              <CardBank />
              <CardBank />
              <CardBank />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
