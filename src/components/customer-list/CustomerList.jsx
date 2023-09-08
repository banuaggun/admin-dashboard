import { useState } from 'react'
import { Link } from 'react-router-dom';

import List from '../../assets/data/List.json'

import './customer-list.scss'

const CustomerList = () => {
  const [search, setSearch] = useState('');
  return (
    <>
    <div className='customer__list'>
     <div className='customer__list__search'>
        <input type="search" placeholder="search..." onChange={(e) => setSearch(e.target.value)} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Link to='/customers/add' relative="path">Add New Customer</Link>
          </tr>
          {List.filter((item) => {
            return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search);
          }).map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.location}</td>
              <td>{item.phone}</td>
              <td>
                <button>Details</button>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  )
}

export default CustomerList