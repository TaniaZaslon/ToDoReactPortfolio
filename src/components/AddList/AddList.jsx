import React, {useState} from "react";
import List from "../List/List.jsx";
import plusSvg from '../../assets/img/plus.png';
import './AddList.scss';
import Badge from "../Badge/badge";

const AddList = ({colors}) => {
    const [visiblePopup, setVisiblePopup] = useState(false);

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
                <input className="field" type="text" placeholder="list name" />
                <div className="add-list__popup-colors">
                    <ul>
                    {colors.map(color => (
                    <Badge key={color.id} color={color.name}/>
                    ))}
                </ul>
                </div>
                <button className="button">Add</button>
            </div>
            )}
        </div>
    );
};

export default AddList;
