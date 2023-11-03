import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function CustomerRead(){
    const [data, setData] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios
            .get(`http://localhost:3000/users/${id}`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <div>
            <h3>Profile Card</h3>
            <table key={`data.${id}`}>
                <tr>
                  <td>
                  {data.name}
                  </td>
                </tr>
                <tr>
                  <td>
                  {data.email}
                  </td>
                </tr>
                
               
            </table>
                <p key={`data.${id}`}>{data.location}</p>
                <p key={`data.${id}`}>{data.totalSpend}</p>
                <p key={`data.${id}`}>{data.totalOrders}</p>
            <p>
                <Link to={`/customers/update/${id}`}>Edit</Link>
                <Link to="/customers" relative="path">Back</Link>
            </p>
        </div>
    );
};

export default CustomerRead;
