import React from 'react';

const Order = (props) => {
    return (
        <div className='order'>
            <p>{props.name}</p>
            <p>x{props.count}</p>
            <p>{props.price}</p>
        </div>
    );
};

export default Order;