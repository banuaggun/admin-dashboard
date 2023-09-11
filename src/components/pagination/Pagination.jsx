import React from "react";

import './pagination.scss';

const Pagination = ({ page, pages, onClick, prevHandler, nextHandler }) => {
  return (
    <div className="pagination">
      <ul className="pagination__container">
        <li className="pagination__container__item" onClick={prevHandler}>
          {" "}
          Prev{" "}
        </li>
        {[...Array(Math.ceil(pages)).keys()].map((x, i) => {
          return (
            <li
              key={i}
              className={
                page - 1 === i
                  ? "active pagination__container__item"
                  : "pagination__container__item"
              }
              onClick={(e) => onClick(e.target.innerText)}
            >
              {" "}
              {x + 1}{" "}
            </li>
          );
        })}
        <li className="pagination__container__item" onClick={nextHandler}>
          Next
        </li>
      </ul>
    </div>
  );
};

export default Pagination;