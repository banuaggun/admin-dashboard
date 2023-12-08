import {useState, useEffect} from 'react'
import axios from 'axios'

import './customertable.scss'

const CustomerTable = () => {
  const [data, setData] = useState([]);

  const [pagination, setPagination] = useState({
		currentPage: 1,
		dataShowLength: 5,
	});
  const totalPage = Math.ceil(data.length / pagination.dataShowLength);
  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(`http://localhost:3000/users`);
      setData(response.data);
    };
    loadData();
}, []);

const paginationPage = (page) => {
  setPagination({ ...pagination, currentPage: page });
};

const paginations = () => {
  const items = [];
  let threePoints = true;
  for (let number = 1; number <= totalPage; number++) {
    if (
      number <= 1 ||
      number >= totalPage ||
      (number >= pagination.currentPage - 1 &&
        number <= pagination.currentPage + 1)
    ) {
      items.push(
        <li
          key={number}
          className={`paginations__list__item ${
            pagination.currentPage === number ? "active" : ""
          }`}
          onClick={() => {
            paginationPage(number);
          }}>
          <a className="paginations__list__link">{number}</a>
        </li>
      );
    } else {
      if (threePoints === true) {
        items.push(
          <li key={number} className="paginations__list__item threePoints">
            <a className="paginations__list__link">...</a>
          </li>
        );
        threePoints = false;
      } 
    }
  }
  return items;
};
const paginationNext = () => {
  if (pagination.currentPage < totalPage) {
    setPagination({ ...pagination, currentPage: pagination.currentPage + 1 });
  } else {
    setPagination({ ...pagination, currentPage: totalPage });
  }
};

const paginationPrev = () => {
  if (pagination.currentPage > 1) {
    setPagination({ ...pagination, currentPage: pagination.currentPage - 1 });
  } else {
    setPagination({ ...pagination, currentPage: 1 });
  }
};

  return (
    <div>
      <table>
          <tbody>
            {data.slice(
						(pagination.currentPage - 1) * pagination.dataShowLength,
						pagination.dataShowLength * pagination.currentPage
					).map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                
              </tr>
             
            ))}
          </tbody>
          
       
      </table>

      <div className="paaginations">
					<ul className="paginations__list">
						<li className="paginations__list__item previous">
							<a
								className="paginations__list__link"
								onClick={() => {
									paginationPrev();
								}}>
								<span>ikon</span>
								<span>Prev</span>
							</a>
						</li>

						{paginations()}

						<li className="paginations__list__item next">
							<a
								onClick={() => {
									paginationNext();
								}}
								className="paginations__list__link">
								<span>Next</span>
								<span>ikon</span>
							</a>
						</li>
					</ul>
			</div>

    </div>
  )
}

export default CustomerTable