import React from 'react';
import './Product.css';

const Product = (props) => {
    return (
        <div onClick={props.addProduct} className='Products__product card'>
            <img className='Products__product__img card-img-top' src={props.img} alt={props.name}/>
            <h5 className='Products__product__name card-title"'>{props.name}</h5>
            <p className='Products__product__price card-text'>Price: {props.price}</p>
        </div>
    );
};

export default Product;