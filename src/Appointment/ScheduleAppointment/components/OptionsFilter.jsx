import PropTypes from "prop-types";

import styles from "../schedule.module.css";

export const OptionsFilter = ({
  data,
  handleChangeFilter,
  id,
  setOpenFilter,
  choosedBefore = [],
}) => {
  return (
    <div className={styles.list_profession}>
      <div
        className={styles.back_close}
        onClick={() => setOpenFilter(false)}
      ></div>
      <ul className={styles.content_list}>
        {data.map((value) => (
          <div key={value} className={styles.li_box}>
            <li
              className={styles.item}
              onClick={() => handleChangeFilter(id, value)}
            >
              {value}
            </li>
            {choosedBefore.includes(value) && (
              <span className={styles.mark_choose}></span>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

OptionsFilter.propTypes = {
  id: PropTypes.string.isRequired,
  choosedBefore: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  setOpenFilter: PropTypes.func.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};
