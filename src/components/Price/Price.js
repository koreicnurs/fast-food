import React from 'react';
import './Price.css';

const Price = (props) => {
    return (
        <div className='Orders__order__price-total'>{props.price}</div>
    );
};

export default Price;