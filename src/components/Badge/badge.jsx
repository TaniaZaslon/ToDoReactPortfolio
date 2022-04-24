import React from 'react';
import './badge.scss';

const Badge = ({ color }) =>  
<i className={`badge badge--${color}`}></i>
export default  Badge;