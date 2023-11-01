import { useState, useEffect } from "react";
import axios from 'axios';

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
            <table>
              <caption>Customer List</caption>
                <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Location</th>
                </tr>
                </thead>
                <tbody>
                  {data.map((d, i) => (
                    <tr key={i}>
                      <td>{d.id}</td>
                      <td>{d.name}</td>
                      <td>{d.email}</td>
                      <td>{d.location}</td>
                      <td>
                        <button>
                          <i className="ph-thin ph-dots-three-outline"></i>
                        </button>
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
