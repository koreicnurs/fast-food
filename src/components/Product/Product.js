import React from 'react';

const Product = (props) => {
    return (
        <div className='prodict'>
            <img src={props.img} alt={props.name} width='100px' height='100px'/>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </div>
    );
};

export default Product;