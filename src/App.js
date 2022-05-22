import React, { useState } from 'react';
import listSvg from './assets/img/list.png';
import DB from './assets/db.json';
import './index.scss';
import './App.scss';
import axios from 'axios';

import {List, AddList, Tasks } from './components';

function App() {
 axios.get('htpp://localhost:3001/lists?_expand=color').then(({ data })) => {
   console.log(data);
 });

  const [lists, setLists] = useState(
    DB.lists.map(item => {
      item.color = DB.colors.filter(color => color.id === item.colorId)[0].name;
      return item;
    })
  );
  const onAddList = (obj) => {
    const newList = [...lists, obj];
    setLists(newList);
  };

  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List items={[
          {
            icon: (<img src={listSvg} alt="List icon" />),
            name: 'All tasks',
          }
        ]} />
        <List items={lists} onRemove={(list) => { console.log(list); }} isRemovable />
        <AddList onAdd={onAddList} colors={DB.colors} />
      </div>
      <div className="todo__tasks">
        <Tasks />
      </div>
    </div>
  );
}

export default App;
