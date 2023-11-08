import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "../pagination/Pagination";
import "./customerlist.scss";

function CustomerList() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const pageSize = 5;
    const pageLength = data.length / pageSize;

    const [search, setSearch] = useState("");
    useEffect(() => {
        axios
            .get(`http://localhost:3000/users`)
            .then((res) => {
                setData(res.data);
                setPage(pageLength);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleDelete = (id) => {
        const confirm = window.confirm("Would you like to Delete User?");
        if (confirm) {
            axios
                .delete(`http://localhost:3000/users/${id}`)
                .then((res) => {
                    location.reload();
                })
                .catch((err) => console.log(err));
        }
    };

    const handlePage = (thePage) => {
        setPage(thePage);

        const t = data.slice((thePage - 1) * pageSize, thePage * pageSize);
        setData(t);
    };
    const prevHandler = (thePage) => {
        if (thePage === 1) {
            handlePage(1);
        } else {
            handlePage(Number(thePage) - 1);
        }
    };

    const nextHandler = (thePage, thePageLength) => {
        if (thePage < thePageLength) {
            handlePage(Number(thePage) + 1);
        }
    };
    return (
        <div>
            <div className="toparea">
                <div className="toparea__search">
                    <i className="ph-thin ph-magnifying-glass"></i>
                    <input
                        type="search"
                        placeholder="Search..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
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
                    {data
                        .slice(page - 1, page * pageSize)
                        .filter((d) => {
                            return search.toLowerCase() === ""
                                ? d
                                : d.name.toLowerCase().includes(search);
                        })
                        .map((d, i) => (
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.location}</td>
                                <td className="buttons">
                                    <Link to={`/customers/read/${d.id}`}>
                                        <i className="ph-thin ph-dots-three-outline"></i>
                                    </Link>
                                    <Link to={`/customers/update/${d.id}`}>
                                        <i className="ph-thin ph-pencil-line"></i>
                                    </Link>
                                    <button onClick={(e) => handleDelete(d.id)}>
                                        <i className="ph-thin ph-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <Pagination
                page={page}
                pageLength={pageLength}
                onClick={(pageEvent) => {
                    handlePage(pageEvent);
                }}
                prevHandler={() => prevHandler(page)}
                nextHandler={() => nextHandler(page, pageLength)}
            />
        </div>
    );
}

export default CustomerList;
