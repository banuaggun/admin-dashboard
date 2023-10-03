import React from 'react'
import { Link } from 'react-router-dom'

import './customer-add.scss'

const CustomerAdd = () => {
  return (
    <div className='customer__add'>
      <h2>Add New User</h2>
      <form className='customer__add__form'>
        <div className="customer__add__form__info">

          {/* personal */}
          <div className='customer__add__form__info__personal'>
            <div>
              <label htmlFor='name'>Name</label>
              <input type="text" name="name" id="name" required/>
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input type="text" name="email" id="email" required/>
            </div>
            <div>
              <label htmlFor='phone'>Phone</label>
              <input type="text" name="phone" id="phone" required/>
            </div>
          </div>
          {/* personal */}
          
          {/* payment */}
          <div className='customer__add__form__info__payment'>
            <div>
              <label htmlFor='order'>Order</label>
              <input type="text" name="order" id="order" />
            </div>
            <div>
              <label htmlFor='spend'>Spend</label>
              <input type="text" name="spend" id="spend" />
            </div>
          </div>
          {/* payment */}

        </div>
        
        
        <div className='customer__add__form__buttons'>
          <button type="submit">Add</button>
          <button type="submit">
          <Link to="/customers" relative="path">Back</Link>
          </button>
        </div>
      </form>
    </div>
  )
}


export default CustomerAdd