import React from 'react';
import "./List.scss";
import classNames from 'classnames';
import Badge from '../Badge/Badge';
import removeSvg from '../../assets/img/close-icon.jpg'

const List = ({items, isRemovable, onClick, onRemove }) => {

    const removeList = (item) => {
        if (window.confirm('Are you sure you want to delete the list?')) {
        onRemove(item);
    }
}    
    return (
        <ul onClick={onClick} className="list">
            {items != null && items.map((item, index) => (
                 <li 
                 key={index} 
                 className={classNames(item.className, {'active': item.active})}
                 >
                    <i>
                        {item.icon ? (
                        item.icon
                     ): (
                        <Badge color={item.color}/>
                     )}
                    </i>
                    <span>{item.name}</span>
                   {isRemovable && (
                     <img 
                        className="list__remove-icon"
                        src={removeSvg} 
                        alt='Remove icon' 
                        onClick={() => removeList(item)} 
                     /> 
                    )}
                </li>
            ))}
      </ul>
  );
}

export default List;