import React, {useState} from 'react';
import Product from "./components/Product/Product";
import {Products} from "./Products";
import Order from "./components/Orders/Order";
import Button from "./components/Buttons/Button";
import Price from "./components/Price/Price";
import './App.css'

const App = () => {

    const [orders, setOrders] = useState([
        {name: 'Humburger', count: 0},
        {name: 'Cheesburger', count: 0},
        {name: 'Fries', count: 0},
        {name: 'Coffee', count: 0},
        {name: 'Tea', count: 0},
        {name: 'Cola', count: 0},
    ]);

    const [price] = useState(0);

    const addOrder = (name) => {
        const copyOrders = orders.map(o => {
            if (o.name === name) {
                return {
                    ...o,
                    count: o.count + 1,
                };
            } else {
                return o;
            }
        });

        setOrders(copyOrders);
    };

    const getPrice = (name) => {
        return Products.find(product => {
            return product.name === name;
        }).price;
    };

    const getTotalPrice = () => {
        let allPrice = [];
        let allCount = [];
        let eachPrice = [];

        orders.map(order => {
            return allCount.push(order.count);
        });

        Products.map(product => {
            return allPrice.push(product.price);
        });

        for (let p = 0; p < allPrice.length; p++) {
            eachPrice.push(allPrice[p] * allCount[p]);
        }

        const total = eachPrice.reduce((a, b) => a + b) + price;

        if (total > 0) {
            return `Total: ${total} KGS`;
        } else {
            return 'Are you starving?';
        }

    };

    const deleteOrder = (name) => {
        const copyOrders = orders.map(r => {
            if (r.name === name && r.count > 0) {
                return {
                    ...r,
                    count: r.count - 1,
                };
            } else if (r.name === name && r.count <= 0) {
                return {
                    ...r,
                    count: 0,
                };
            }

            return r;
        })
        setOrders(copyOrders);
    };

    const renderOrders = orders.map((r, index) => {
        if (r.count > 0) {
            return (
                <Order
                    key={index}
                    name={r.name}
                    count={r.count}
                    price={getPrice(r.name)}
                >
                    <Button
                        delete={() => deleteOrder(r.name)}
                    />
                </Order>
            );
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
            <div className='Orders'>
                {renderOrders}
                <Price
                    price={getTotalPrice()}
                />
            </div>
            <div className='Products'>
                {objProduct}
            </div>
        </>
    );
};

export default App;