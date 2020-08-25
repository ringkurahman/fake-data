import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import './User.css';

const User = (props) => {
    const {name, username, img, annualsalary, email, address, phone, company} = props.details;
    return (
      <div className='user-container'>
        <img src={img} alt='' />
        <div className='info'>
          <h4>Name : {name}</h4>
          <p>Username : {username}</p>
          <p>Email : {email}</p>
          <p>Phone : {phone}</p>
          <p>City : {address.city}</p>
          <p>Company : {company.name}</p>
          <p>Annual Salary : ${annualsalary}</p>
          <button
            className='main-button'
            onClick={ () => props.handleAddUser(props.details) }
          >
            <FontAwesomeIcon icon={faPlusSquare} />
            <span className='main-button-text'>Add User</span>
          </button>
        </div>
      </div>
    );
};

export default User;