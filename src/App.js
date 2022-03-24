import React from 'react';
import List from './components/List';
import  listSvg from './assets/img/list.png';

function App() {
  return (
    <div className="todo">
    <div className="todo__sidebar">
    <List items={[
      {
      icon: (<img src={listSvg} alt="List icon"/>),
      name: 'All tasks',
      }
     ]}/>
      <List items={[
        {
          color: 'green',
          name: 'buy',
        },
        {
          color: 'blue',
          name: 'frontend', 
          active: true
        },
        {
          color: 'pink',
          name: 'Films',
        },
      ]}/>

    </div>
    <div className="todo__tasks">
    </div>
  </div>
  );
}

export default App;
