import axios from 'axios'
import {useState, useEffect} from 'react'
import FetchData from '../../hooks/FetchData'

const CustomerTable = () => {

  const {data, loading} = FetchData();
  
  return (
    <div>
      <table>
         {!loading && (
<tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
         )}
       
      </table>
    </div>
  )
}

export default CustomerTable