import React from 'react';
import styles from './App.module.css';
import Filters from './Components/Filters';
import InputBar from './Components/InputBar';
import TodoList from './Components/TodoList';

const App = () => {
  return (
    <div className={styles.App}>
      <div className="paper">
        <Filters />
        <InputBar />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
