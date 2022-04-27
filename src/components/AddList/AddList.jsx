import React, {useState} from "react";
import List from "../List/List.jsx";
import plusSvg from '../../assets/img/plus.png';
import './AddList.scss';
import Badge from "../Badge/badge";

import closeIcon from '../../assets/img/close-icon.jpg'

const AddList = ({colors}) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [seletedColor, selectColor] = useState(colors[0].id);
    const [inputValue, setInputValue] = useState('');

    const addList = () => {
        if (!inputValue) {
            alert('enter list name');
            return;
        }
console.log({ id: Math.random(), name: inputValue, colorId: seletedColor});
};

return(
        <div className="add-list">
            <List 
            onClick={() => setVisiblePopup(true)}
            items={[
                {
                    className: 'list__add-button',
                    icon: (<img src={plusSvg} alt="add List icon" />),
                    name: 'add list',
                }
            ]}
            />
            {visiblePopup && (
            <div className="add-list__popup">
                <img 
                onClick={() => setVisiblePopup(false)}
                src={closeIcon} 
                alt='close button' 
                className="add-list__popup-close-btn"
                 />
                <input value={inputValue} 
                onChange={ e => setInputValue(e.target.value)}
                className="field" type="text" placeholder="list name" />
                <div className="add-list__popup-colors">
                    <ul>
                    {colors.map(color => (
                    <Badge onClick={() => selectColor(color.id)} 
                    key={color.id} 
                    color={color.name}
                    className ={seletedColor === color.id && 'active'}/>
                    ))}
                </ul>
                </div>
                <button onClick={addList} className="button">Add</button>
            </div>
            )}
        </div>
    );
};

export default AddList;
