import React, { Fragment } from "react";
import List from "./List";
const AddListButton = () => {
    retorn(
        <Fragment>
            <List items={[
                {
                    className: 'list_add-button',
                    icon: (<img src={plusSvg} alt="add List icon" />),
                    name: 'add list',
                }
            ]}
            />
            <div className="add-list-form">
                <h1>123</h1>
            </div>
        </Fragment>
    );
};

export default AddListButton;
