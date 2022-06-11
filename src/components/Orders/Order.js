import React from 'react';
import './Orders.css';

const Order = (props) => {
    return (
        <div className='Orders__order card'>
            <h5 className='Orders__order__name card-title'>{props.name}</h5>
            <p className='Orders__order__count'>x{props.count}</p>
            <p className='Orders__order__price'>{props.price} KGS</p>
            {props.children}
        </div>
    );
};

export default Order;