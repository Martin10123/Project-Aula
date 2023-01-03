import PropTypes from "prop-types";

import styles from "../schedule.module.css";

export const OptionsFilter = ({
  data,
  handleChangeFilter,
  id,
  setOpenFilter,
}) => {
  return (
    <div className={styles.list_profession}>
      <div
        className={styles.back_close}
        onClick={() => setOpenFilter(false)}
      ></div>
      <ul className={styles.content_list}>
        {data.map((value) => (
          <li
            className={styles.item}
            key={value}
            onClick={() => handleChangeFilter(id, value)}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

OptionsFilter.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  setOpenFilter: PropTypes.func.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};
