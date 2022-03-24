import React from 'react';
import List from './components/List';
import listSvg from './assets/img/list.png';
import plusSvg from './assets/img/plus.png';

function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List items={[
          {
            icon: (<img src={listSvg} alt="List icon" />),
            name: 'All tasks',
          }
        ]} />
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
            name: 'films',
          },
        ]}
          IsRemovable
        />
        <List items={[
          {
            className: 'list_add-button',
            icon: (<img src={plusSvg} alt="add List icon" />),
            name: 'add list',
          }
        ]} />
    </div>
      <div className="todo__tasks">
      </div>
    </div>
  );
}

export default App;
