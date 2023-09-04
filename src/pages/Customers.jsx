import React , {useState} from 'react'

import CustomerList from '../assets/data/CustomerList.json'
import Search from '../components/search/Search';

const Customers = () => {
  const [contacts, setContacts] = useState(CustomerList);
  const [search, setSearch] = useState('');
  return (
    <>
      <div>
        <input type="search" placeholder="search..."   onChange={(e) => setSearch(e.target.value)} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {CustomerList.filter((item) => {
            return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search);
          }).map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.location}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Customers