import React from "react";

const Paginate = ({ totalItems, itemsPerPage, pageSelected, currentPage }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul className="pagination pagination-sm justify-content-end border-0">
        {pageNumber.map((number) => {
          let classes = "page-item ";
          if (number === currentPage) {
            classes += "active";
          }
          return (
            <li className={classes}>
              <a
                href="!#"
                onClick={() => pageSelected(number)}
                className="page-link"
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Paginate;
