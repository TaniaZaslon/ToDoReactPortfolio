import React from 'react';
import List from './components/List/List.jsx';
import listSvg from './assets/img/list.png';
import AddList from './components/AddList/AddList.jsx';
import DB from './assets/db.json';


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
            active: true,
          },
          {
            color: 'pink',
            name: 'films',
          },
        ]}
          IsRemovable
        />
        <AddList colors={DB.colors} />
    </div>
      <div className="todo__tasks">
      </div>
    </div>
  );
}

export default App;
