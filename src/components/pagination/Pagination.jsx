import React, { useState } from "react";

import './pagination.scss';

const Pagination = ({ page, pages, onClick, prevHandler, nextHandler }) => {
  const [currentPage, setCurrentPage] = useState(page);


  return (
    <div className="pagination">
      <ul className="pagination__container">
        <li className="pagination__container__item" onClick={prevHandler}>
          <i className="ph-thin ph-caret-left"></i>
        </li>
        {[...Array(Math.ceil(pages)).keys()].map((x, i) => {
          if (i === 0 || i === Math.ceil(pages) - 1 || (i >= currentPage - 2 && i <= currentPage + 2)) {
            return (
              <li
                key={i}
                className={
                  currentPage - 1 === i
                    ? "active pagination__container__item"
                    : "pagination__container__item"
                }
                onClick={() => {
                  setCurrentPage(i + 1);
                  onClick(i + 1);
                }}
              >
                {" "}
                {x + 1}{" "}
              </li>
            );
          } else if (i === currentPage - 3 || i === currentPage + 3) {
            return (
              <li key={i} className="pagination__container__item">
                ...
              </li>
            );
          } else if (i === currentPage - 4 && currentPage > 4) {
            return (
              <li key={i} className="pagination__container__item">
                {currentPage - 2}
              </li>
            );
          } else if (i === currentPage + 2 && currentPage < pages - 3) {
            return (
              <li key={i} className="pagination__container__item">
                {currentPage + 2}
              </li>
            );
          } else {
            return null;
          }
        })}
        <li className="pagination__container__item" onClick={nextHandler}>
          <i className="ph-thin ph-caret-right"></i>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
