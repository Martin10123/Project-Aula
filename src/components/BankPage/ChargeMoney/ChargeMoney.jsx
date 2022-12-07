import { AiOutlineDollarCircle } from "react-icons/ai";
import { photoUser } from "../../../images";
import { BiLogOut, BiTransfer } from "react-icons/bi";
import { BsCreditCard, BsClipboardData, BsSafe2, BsBank } from "react-icons/bs";
import { CardBank } from "./CardBank";
import { FaRegBell } from "react-icons/fa";
import { HiEllipsisVertical } from "react-icons/hi2";
import { MdTransferWithinAStation } from "react-icons/md";

import styles from "./chargeMoney.module.css";

export const ChargeMoney = () => {
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
            <div className={styles.chargeMoney__money_avaible}>
              <div className={styles.chargeMoney__name_bank}>
                <p>
                  Banco bogota <span>Card</span>
                </p>
                <p>Ver cuenta</p>
              </div>
              <div className={styles.chargeMoney__quantifi_money}>
                <div className={styles.chargeMoney__spinner}></div>
                <BsBank />
                <p>Montón disponible</p>
                <p>$2.556.000</p>
              </div>
            </div>

            <div className={styles.chargeMoney__content_list_options}>
              <div className={styles.chargeMoney__list_option}>
                <BsCreditCard />
                <p>Nueva tarjeta</p>
              </div>
              <div className={styles.chargeMoney__list_option}>
                <AiOutlineDollarCircle />
                <p>Recargar</p>
              </div>
              <div className={styles.chargeMoney__list_option}>
                <MdTransferWithinAStation />
                <p>Envia amigo</p>
              </div>
              <div className={styles.chargeMoney__list_option}>
                <BsClipboardData />
                <p>Ver datos</p>
              </div>
              <div className={styles.chargeMoney__list_option}>
                <BsSafe2 />
                <p>Caja fuerte</p>
              </div>
              <div className={styles.chargeMoney__list_option}>
                <BiTransfer />
                <p>Mis cuentas</p>
              </div>
            </div>
          </div>
          <div className={styles.chargeMoney__transition}>
            <h3>Tus transiciones</h3>

            <div className={styles.chargeMoney__list_transition}>
              <CardBank />
              <CardBank />
              <CardBank />
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
