import React from 'react'; // Исправленный импорт
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

const Context = React.createContext();

const Provider = ({ children }) => {
  const [value, setValue] = React.useState();

  return <Context.Provider value={{ value, setValue }}>{children}</Context.Provider>; // Закрывающая фигурная скобка добавлена
};

const root = createRoot(document.getElementById('root')); // Создаем корень
root.render(
  <Provider>
    <App />
  </Provider>,
);

export default Context;
