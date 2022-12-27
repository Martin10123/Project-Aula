import { IoChevronBackOutline } from "react-icons/io5";
import { CardProduct, CountProduct } from "./components";

import styles from "./myCart.module.css";

export const MyCartPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.nav}>
        <button>
          <IoChevronBackOutline />
        </button>
        <p>My Cart</p>
        <div></div>
      </div>

      <div className={styles.content}>
        <div className={styles.container_card}>
          <CardProduct />
        </div>

        <div className={styles.container_total_price}>
          <CountProduct title="Total articulos" data="2" />
          <CountProduct title="Total" data="$ 220.000" />
          <CountProduct title="Descuento" data="5%" />

          <hr />

          <CountProduct title="Total final" data="$ 200.000" />

          <button className={styles.button_product}>Comprar</button>
        </div>
      </div>
    </section>
  );
};
