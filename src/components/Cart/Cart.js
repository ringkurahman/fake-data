import React from 'react';
import './Cart.css';
import { parse } from '@fortawesome/fontawesome-svg-core';

const Cart = (props) => {
    const cart = props.cart;
    // const totalSalary = cart.reduce( (totalSalary, usr) => totalSalary + usr.salary, 0)
    let totalSalary = 0;
    for (let i = 0; i < cart.length; i++) {
        const user = cart[i];
        console.log(user);
        totalSalary = totalSalary + parseInt(user.annualsalary);
    }
    return (
        <div className='cart-container'>
            <h4>Added User : {cart.length}</h4>
            <p>Total Salary : ${totalSalary}</p>
        </div>
    );
};

export default Cart;