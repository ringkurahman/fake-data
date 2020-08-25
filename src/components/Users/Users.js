import React, { useState } from 'react';
import fakeData from '../../fakeData/users';
import './Users.css';
import User from '../User/User';
import Cart from '../Cart/Cart';

const Users = () => {
    const [users, setUsers] = useState(fakeData);

    const [cart, setCart] = useState([]);

    const handleAddUser = (details) => { 
        const newCart = [...cart, details];
        setCart(newCart);
    }
    
    return (
        <div className='main-container'>
            <div className="left-container">
            </div>
            <div className="users-container">
                <h3>Total Users Data: {users.length}</h3>
                {
                    users.map(user => <User details={user} key={user.id} handleAddUser={handleAddUser} ></User>)
                }
            </div>
            <div className="right-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Users;
