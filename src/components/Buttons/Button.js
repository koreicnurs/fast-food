import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.delete} className='btn btn-info'>Delete</button>
    );
};

export default Button;