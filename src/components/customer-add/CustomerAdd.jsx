import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import './customer-add.scss'

const CustomerAdd = () => {

  const [id, idChange] = useState("");
  const [name, nameChange] = useState("");
  const[email, emailChange]=useState("");
  const[phone, phoneChange]=useState("");
  const[validation, validationChange]=useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.prevent.default();
    const contacts = {name, email, phone};
  }
  return (
    <>
      <div className='customer__add__form'>
        <form onSubmit={handleSubmit}>
          <fieldset className='customer__add__form__user__info'>
            <h2>New User Info</h2>
          <div>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" required/>
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" required/>
          </div>
          <div>
            <label for="phone">Phone</label>
            <input type="number" name="phone" id="phone" required/>
          </div>
          </fieldset>
          <fieldset className='customer__add__form__user__products'>
            <div>
              <label for="spend">Spend</label>
              <input type="number" name="spend" id="spend"/>
            </div>
            <div>
              <label for="order">Order</label>
              <input type="number" name="order" id="order"/>
            </div>
          </fieldset>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CustomerAdd