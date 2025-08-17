import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";

const pageSize = 10;

const Pagination = () => {
  // const [products, setProducts] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [perPageSize, setPerPageSize] = useState(pageSize);

  const {products,error} = useFetch("https://dummyjson.com/products?limit=500")

  const handleButtonClick = (idx) => {
    setCurrPage(idx);
  };

  console.log(perPageSize);

  const totalPages = Math.ceil(products.length / perPageSize);

  const start = currPage * perPageSize;
  const end = start + perPageSize;

  const handleSelectChange = (e) => {
    setPerPageSize(Number(e.target.value));
    setCurrPage(0);
  };

  return (
    <div className="max-w-5xl m-auto p-5">
      <div>
        <select
          name="filter-select"
          id=""
          className="border p-2 mb-4"
          onChange={handleSelectChange}
        >
          <option value="default">Select product per page</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-4">
        {products.length && (
          <>
            {products.slice(start, end).map((prod) => (
              <ProductItems key={prod.id} product={prod} />
            ))}
          </>
        )}
      </div>
      <div>
        <button
          className="ml-1 border p-0.5 rounded-md"
          onClick={() => setCurrPage((prev) => prev - 1)}
        >
          &larr; previous{" "}
        </button>
        {[...new Array(totalPages)].map((_, idx) => {
          if (
            idx === 0 ||
            idx === totalPages - 1 ||
            Math.abs(idx - currPage) <= 1
          ) {
            return (
              <button
                key={idx}
                className="p-1 border ml-0.5 rounded-md"
                onClick={() => handleButtonClick(idx)}
              >
                {idx}
              </button>
            );
          } else if (idx === currPage - 2 || idx === currPage + 2) {
            return <span key={idx}>...</span>;
          } else return null;
        })}
        <button
          className="ml-1 border p-0.5 rounded-md"
          onClick={() => setCurrPage((prev) => prev + 1)}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

function ProductItems({ product }) {
  const { title, thumbnail, price } = product;
  return (
    <>
      <div className="border p-2">
        <img src={thumbnail} alt={title} className="h-28" />
        <p>Title :- {title}</p>
        <p>Price :- {price}</p>
      </div>
    </>
  );
}

export default Pagination;
