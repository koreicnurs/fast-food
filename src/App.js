import React from 'react';
import Product from "./components/Product/Product";
import product from "./components/Product/Product";
import {Products} from "./Products";

const App = () => {

    const objProduct = Products.map((p, index) => (
        <Product
            key={index}
            img={p.image}
            name={p.name}
            price={p.price}
        />
    ));

    return (
        <>
            {objProduct}
        </>
    );
};

export default App;