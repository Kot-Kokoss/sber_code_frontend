import React from 'react';
import styles from './Log.module.scss';
import img from '../../img/test.png';

export const Log = ({ violation_time, violation_type }) => {
  const [imgIsOpen, setImgIsOpen] = React.useState(false);
  const showImgHandler = () => {
    setImgIsOpen((prev) => !prev);
  };

  const vilation__names = [
    {
      status: 'helmet',
      title: 'Нет каски',
    },
    {
      status: 'opened_door',
      title: 'Дверь открыта во время работы',
    },
    {
      status: 'working_robot',
      title: 'Рабочие находятся в зоне работающего робота',
    },
  ];

  const violation_info = vilation__names.find((violation) => violation.status === violation_type);

  const date = new Date(violation_time);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
  };

  const formattedDate = date.toLocaleString('ru-RU', options);

  return (
    <li className={styles.item} key={violation_time}>
      <div className={styles.info}>
        <div className={styles.type}>Тип нарушения: {violation_info.title}</div>
        <div>Время нарушения: {formattedDate}</div>
        <div className={styles.imgBtn}>
          Изображение
          <div className="sort__btn" onClick={showImgHandler}>
            {imgIsOpen ? (
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                  fill="#2C2C2C"
                  transform="rotate(180, 5, 3)"
                />
              </svg>
            ) : (
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                  fill="#2C2C2C"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      {imgIsOpen && <img src={img} alt={violation_type} />}
    </li>
  );
};
