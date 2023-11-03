import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useParams, useNavigate} from 'react-router-dom'

const CustomerUpdate = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    spend: "",
    order: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    axios
        .get(`http://localhost:3000/users/${id}`)
        .then((res) => setValues(res.data))
        .catch((err) => console.log(err));
  }, []);
  const handleUpdate = (event) => {
    event.preventDefault();
    axios
          .put(`http://localhost:3000/users/`+id, values)
          .then((res) => {
              console.log(res);
              navigate('/customers')
          })
          .catch((err) => console.log(err));
  }
  return (
    <div className="customer__add">
    <h2>Update User Information</h2>
    <form className="customer__add__form" onSubmit={handleUpdate}>
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
                        value={values.name}
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
                        value={values.email}
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
                        value={values.phone}
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
                        value={values.location}
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
                        value={values.order}
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
                        value={values.spend}
                    />
                </div>
            </div>
            {/* payment */}
        </div>

        <div className="customer__add__form__buttons">
            <button type="submit">Update</button>
            <button type="submit">
                <Link to="/customers" relative="path">
                    Back
                </Link>
            </button>
        </div>

        
    </form>
</div>
  )
}

export default CustomerUpdate