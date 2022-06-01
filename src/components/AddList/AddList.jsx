import React, {useEffect, useState} from "react";
import List from "../List/List.jsx";
import Badge from "../Badge/Badge";

import plusSvg from '../../assets/img/plus.png';
import closeIcon from '../../assets/img/close-icon.jpg'

import './AddList.scss';

const AddList = ({colors, onAdd}) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [seletedColor, selectColor] = useState(3);
    const [inputValue, setInputValue] = useState('');

    useEffect (() => {
        if (Array.isArray(colors)) {
            selectColor(colors[0].id);
        }
    }, [colors]);

    const onClose = () => {
        setVisiblePopup(false);
        setInputValue('');
        selectColor(colors[0].id);
    }
    const addList = () => {
        if (!inputValue) {
            alert('enter list name');
            return;
        }
        const color = colors.filter(c => c.id === seletedColor)[0].name;
        onAdd({ id: Math.random(), name: inputValue, color});
        onClose();
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
                onClick={onClose}
                src={closeIcon} 
                alt='close button' 
                className="add-list__popup-close-btn"
                 />
                <input value={inputValue} 
                onChange={e => setInputValue(e.target.value)}
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
