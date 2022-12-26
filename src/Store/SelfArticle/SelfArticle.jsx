import { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { OptionsFilter } from "../../Appointment/ScheduleAppointment/components";

import { dataCountrys, InputForm } from "../../Helpers";
import { herramient, state_product } from "../helpers/CategoriesStore";
import { photoUser } from "../../images";

import { ArticlePreview } from "../ArticlePreview/pages/ArticlePreview";
import styles from "./selfArticle.module.css";

export const SelfArticle = () => {
  const [openCategories, setopenCategories] = useState(false);
  const [openState, setopenState] = useState(false);

  return (
    <div className={styles.content_self_preview}>
      <div className={styles.container}>
        <div className={styles.nav_return}>
          <div className={styles.return}>
            <BsArrowLeft />
            <p>Nueva publicación</p>
          </div>
          <div className={styles.button_post}>
            <button>Publicar</button>
          </div>
        </div>
        <div className={styles.box_global_info}>
          <div className={styles.content_info_user}>
            <img
              alt="Foto de perfil del usuario"
              className={styles.image_user}
              src={photoUser}
            />
            <span className={styles.name}>
              <p>Martin Elias</p>
              <small>Publicado en el store</small>
            </span>
          </div>

          <div className={styles.form}>
            <div className={styles.option_product}>
              <BiAddToQueue />
              <p>Agregar imagen</p>
            </div>

            <input id="inputStore" type="file" style={{ display: "none" }} />

            <InputForm
              nameInput="productName"
              onChangeF={() => {}}
              placeH="Nombre del producto..."
              type="text"
              value=""
            />

            <InputForm
              nameInput="productPrice"
              onChangeF={() => {}}
              placeH="Precio..."
              type="number"
              value=""
            />

            <div
              className={styles.option_product}
              onClick={() => setopenCategories(true)}
            >
              <p>Categoria</p>
              <IoMdArrowDropdown />
            </div>

            {openCategories && (
              <OptionsFilter
                data={herramient}
                setOpenFilter={setopenCategories}
              />
            )}

            <div
              className={styles.option_product}
              onClick={() => setopenState(true)}
            >
              <p>Estado</p>
              <IoMdArrowDropdown />
            </div>

            {openState && (
              <OptionsFilter
                data={state_product}
                setOpenFilter={setopenState}
              />
            )}

            <textarea
              name="productDesc"
              placeholder="Descripción del producto..."
              className={styles.textarea_desc}
            />

            <div className={styles.location}>
              <p>Ubicación</p>
              <select className={styles.location__select} name="countryArticle">
                {dataCountrys.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <ArticlePreview />
    </div>
  );
};
