import styles from "../viewArticle.module.css";

export const InfoProduct = () => {
  return (
    <div className={styles.content_info_product}>
      <div className={styles.name_product}>
        <p>Herramienta para trabajo</p>
        <p>Publicado hace 20 minutos</p>
      </div>

      <div className={styles.price_product}>
        <p>$ 200.000</p>
        <small>$ 250.000</small>
      </div>

      <div className={styles.details_product}>
        <div className={styles.detail_item}>
          <p>Disponible</p>
        </div>
        <div className={styles.detail_item}>
          <p>Estado</p>
          <p>Nuevo</p>
        </div>
        <div className={styles.detail_item}>
          <p>Categoria</p>
          <p>Espatula</p>
        </div>
        <div className={styles.detail_item_desc}>
          <p>Descripción</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
            fugiat laborum ratione, consectetur corporis excepturi quisquam
            accusamus consequuntur officiis necessitatibus doloribus inventore
            explicabo earum dolor fugit vero eos porro animi!
          </p>
        </div>

        <div className={styles.button_buy_product}>
          <button>Comprar</button>
        </div>
      </div>
    </div>
  );
};
