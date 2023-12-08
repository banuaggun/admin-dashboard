import {useState} from 'react'
import FetchData from '../../hooks/FetchData'
import Pagination from '../pagination/Pagination'

const CustomerTable = () => {

  const {data, loading} = FetchData();
  const [page, setPage] = useState(1);

  const pages = ({data, pageSize}) => {
      data.length / pageSize;
  }
  const pageSize = 5;
 
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
             
            )).slice(page - 1, page * pageSize)}
            <tr>
              <td>{page}</td>
              <td>{page + 1}</td>
              <td>{data.length / pageSize}</td>
            </tr>
          </tbody>
          
        )}
       
      </table>
      <div>
      </div>
    </div>
  )
}

export default CustomerTable