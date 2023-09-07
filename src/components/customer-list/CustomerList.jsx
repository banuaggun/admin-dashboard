import { useState } from 'react'
import { Link } from 'react-router-dom';

import List from '../../assets/data/List.json'

const CustomerList = () => {
  const [search, setSearch] = useState('');
  return (
    <>
     <div>
        <input type="search" placeholder="search..."   onChange={(e) => setSearch(e.target.value)} />
      </div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Location</td>
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
    </>
  )
}

export default CustomerList