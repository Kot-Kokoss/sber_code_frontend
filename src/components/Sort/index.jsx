import React from 'react';
import styles from './Sort.module.scss';

export const PopupFilters = [
  { name: 'все', sortProperty: 'all' },
  { name: 'популярности', sortProperty: 'rating' },
  { name: 'цене', sortProperty: 'price' },
  { name: 'алфавиту', sortProperty: 'title' },
];

export const Sort = () => {
  const [popupOpen, setPopupOpen] = React.useState(false);
  const [sortType, setSortType] = React.useState('all');

  const sortRef = React.useRef();

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      const path = event.composedPath();
      if (!path.includes(sortRef.current)) {
        setPopupOpen(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.sort} ref={sortRef}>
      <div className="sort__label">
        <b>Сортировка по:</b>
        <span onClick={() => setPopupOpen(!popupOpen)}>{sortType.name}</span>
      </div>
      {popupOpen && (
        <div className="sort__popup">
          <ul>
            {PopupFilters.map((filter, i) => (
              <li
                key={i}
                onClick={() => {
                  setPopupOpen(false);
                  setSortType(filter);
                }}
                className={filter.sortProperty === sortType.sortProperty ? 'active' : ''}>
                {filter.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
