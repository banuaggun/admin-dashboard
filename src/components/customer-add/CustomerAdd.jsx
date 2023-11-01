import React, { useState } from "react";
import { Link } from "react-router-dom";
import customer from '../../assets/data/db.json';
import "./customer-add.scss";

const CustomerAdd = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        spend: "",
        order: "",
    });

    const handleSubmit = (event) => {
      event.preventDefault();

      customerData.map((customer, index) => (
        <tr key={index}>
          <td>{customer.name}</td>
        </tr>
      ))
    }

    const customerData=[];
    return (
        <div className="customer__add">
            <h2>Add New User</h2>
            <form className="customer__add__form" onSubmit={handleSubmit}>
                <div className="customer__add__form__info">
                    {/* personal */}
                    <div className="customer__add__form__info__personal">
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                onChange={(e) =>
                                    setValues({
                                        ...values,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                required
                                onChange={(e) =>
                                    setValues({
                                        ...values,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                required
                                onChange={(e) =>
                                    setValues({
                                        ...values,
                                        phone: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label htmlFor="location">Location</label>
                            <input
                                type="text"
                                name="location"
                                id="location"
                                onChange={(e) =>
                                    setValues({
                                        ...values,
                                        location: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    {/* personal */}

                    {/* payment */}
                    <div className="customer__add__form__info__payment">
                        <div>
                            <label htmlFor="order">Order</label>
                            <input
                                type="text"
                                name="order"
                                id="order"
                                onChange={(e) =>
                                    setValues({
                                        ...values,
                                        order: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label htmlFor="spend">Spend</label>
                            <input
                                type="text"
                                name="spend"
                                id="spend"
                                onChange={(e) =>
                                    setValues({
                                        ...values,
                                        spend: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    {/* payment */}
                </div>

                <div className="customer__add__form__buttons">
                    <button type="submit">Add</button>
                    <button type="submit">
                        <Link to="/customers" relative="path">
                            Back
                        </Link>
                    </button>
                </div>

                
            </form>
        </div>
    );
};

export default CustomerAdd;
