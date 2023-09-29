import { useState } from "react";
import { Link } from "react-router-dom";

import List from "../../assets/data/List.json";
import Pagination from "../pagination/Pagination";

import "./customer-list.scss";

const CustomerList = () => {
    const [search, setSearch] = useState("");


    /* ---- Pagination ----- */ 
    const pageSize = 6;
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
            <div className="customer__list">
                <div className="customer__list__search">
                    <input
                        type="search"
                        placeholder="Search Customer..."
                        onChange={(e) => setSearch(e.target.value)}
                        className="customer__list__search__input"
                    />
                </div>
                <div className="customer__list__add">
                    <Link to="/customers/add" relative="path">
                        <button>
                            <span>
                                <i className="ph-thin ph-plus-circle"> Add New Customer</i>
                            </span>
                        </button>
                    </Link>
    
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
                                    <td>
                                        <button>
                                            <i className="ph-thin ph-dots-three"></i>
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
