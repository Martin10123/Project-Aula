import { useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFilterLeft, BsFilterRight } from "react-icons/bs";
import { FcLike } from "react-icons/fc";

import { CardProduct, SideBar } from "../components";
import { herramient } from "../../helpers/CategoriesStore";
import { OptionsFilter } from "../../../Appointment/ScheduleAppointment/components";

import styles from "./mainStore.module.css";

export const MainStore = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <section className={styles.container}>
      <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />

      <div className={styles.content_info}>
        <nav className={styles.content_nav}>
          <BsFilterLeft onClick={() => setOpenSideBar(true)} />
          <p>Store</p>
          <Link to="/store/myCart/Martin">
            <AiOutlineShoppingCart />
          </Link>
        </nav>

        <div className={styles.form}>
          <input
            type="text"
            placeholder="Buscar..."
            className={styles.input_form}
          />
        </div>

        <div className={styles.title}>
          <p>Productos</p>

          <div className={styles.content_options_svg}>
            <div className={styles.search_filter}>
              <BsFilterRight onClick={() => setOpenFilter(true)} />
            </div>

            <div className={styles.search_filter}>
              <FcLike />
            </div>
          </div>

          {openFilter && (
            <OptionsFilter data={herramient} setOpenFilter={setOpenFilter} />
          )}
        </div>

        <div className={styles.container_card}>
          <Link to="/store/viewArticle/12345">
            <CardProduct />
          </Link>
        </div>
      </div>
    </section>
  );
};
