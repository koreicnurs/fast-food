import React, {useState} from 'react';
import Product from "./components/Product/Product";
import {Products} from "./Products";
import Order from "./components/Orders/Order";

const App = () => {

    const [orders, setOrders] = useState([
        {name: 'Humburger', count: 0},
        {name: 'Cheesburger', count: 0},
        {name: 'Fries', count: 0},
        {name: 'Coffee', count: 0},
        {name: 'Tea', count: 0},
        {name: 'Cola', count: 0},
    ])

    const addOrder = (name) => {
        const copyOrders = orders.map(o => {
            if (o.name === name) {
                return {
                    ...o,
                    count: o.count + 1,
                }
            } else {
                return o;
            }
        });

        setOrders(copyOrders);
    }

    const getPrice = (name) => {
        return Products.find(product => {
            return product.name === name;
        }).price;
    };

    const renderOrders = orders.map((r, index) => {
        if (r.count > 0) {
            return (
                <Order
                    key={index}
                    name={r.name}
                    count={r.count}
                    price={getPrice(r.name)}
                />)
        }

    });

    const objProduct = Products.map((p, index) => (
        <Product
            key={index}
            img={p.image}
            name={p.name}
            price={p.price}
            addProduct={() => addOrder(p.name)}
        />
    ));

    return (
        <>
            {renderOrders}
            {objProduct}
        </>
    );
};

export default App;