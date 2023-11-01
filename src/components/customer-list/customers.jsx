import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import List from '../../../db.json';
import Pagination from "../pagination/Pagination";

import "./customerlist.scss";
import "./search.scss";

const CustomerList = () => {
    const [search, setSearch] = useState("");

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    /* ---- Pagination ----- */ 
    const pageSize = 5;
    const pageLength = List.length / pageSize;
    const [page, setPage] = useState(1);
    
    const [contacts, setContacts] = useState(
        List.slice(page - 1, page * pageSize)
    );

    

    const handlePage = (thePage) => {
        setPage(thePage);
        const t = List.slice((thePage - 1) * pageSize, thePage * pageSize);
        setContacts(t);
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

    /* ---- Pagination ----- */ 

    return (
        <>
            <div className="customerList">
                <div className="customerList__area">
                    <div className="customerList__area__search">
                        <i className="ph-thin ph-magnifying-glass"></i>
                        <input
                            type="search"
                            placeholder="Search Customer..."
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="customerList__area__add">
                    <Link to="/customers/add" relative="path">
                        <button>
                            <i className="ph-thin ph-plus-circle"></i>
                            <span>
                                Add New Customer
                            </span>
                        </button>
                    </Link>
    
                </div>
                </div>
                
                
                <table>
                    <caption>Customers</caption>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts
                            .filter((item) => {
                                return search.toLowerCase() === ""
                                    ? item
                                    : item.name.toLowerCase().includes(search);
                            })
                            .map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.location}</td>
                                    <td>{item.phone}</td>
                                    <td className="buttons">
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
                <Pagination
                    page={page}
                    pages={pageLength}
                    onClick={(pageEvent) => {
                        handlePage(pageEvent);
                    }}
                    prevHandler={() => prevHandler(page)}
                    nextHandler={() => nextHandler(page, pageLength)}
                />
            </div>
        </>
    );
};

export default CustomerList;
