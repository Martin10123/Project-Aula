import { ArticlePreview } from "../../ArticlePreview/ArticlePreview";
import { FormProduct, InfoUserSeller, NavBarReturn } from "../components";

import styles from "../selfArticle.module.css";

export const SelfArticle = () => {
  return (
    <div className={styles.content_self_preview}>
      <div className={styles.container}>
        <NavBarReturn />

        <div className={styles.box_global_info}>
          <InfoUserSeller />

          <FormProduct />
        </div>
      </div>

      <ArticlePreview />
    </div>
  );
};
