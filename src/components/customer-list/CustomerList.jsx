import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import './customerlist.scss';

function CustomerList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:3000/users")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <div>
          <div className="toparea">
            <div className="toparea__add">
              <Link to="/customers/add">Add</Link>
            </div>
          </div>
            <table>
              <caption>Customer List</caption>
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                  {data.map((d, i) => (
                    <tr key={i}>
                      <td>{d.id}</td>
                      <td>{d.name}</td>
                      <td>{d.email}</td>
                      <td>{d.location}</td>
                      <td className="buttons">
                        <Link to={`/customers/read/${d.id}`}>
                          <i className="ph-thin ph-dots-three-outline"></i>
                        </Link>
                        <button>
                          <i className="ph-thin ph-pencil-line"></i>
                        </button>
                        <button>
                          <i className="ph-thin ph-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
            </table>
        </div>
    );
}

export default CustomerList;
