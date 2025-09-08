import { useEffect, useRef, useState } from "react";

const LIMIT = 10;
let skip = 0;

const InfiniteScroll = () => {
  const [products, setProducts] = useState([]);
  const lastDivRef = useRef(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
      );
      const data = await response.json();

      setProducts((prev) => [...prev, ...data.products]);
      skip += LIMIT; 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          fetchData();
        }
      },
      { rootMargin: "200px" }
    );

    if (lastDivRef.current) {
      observer.observe(lastDivRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="p-5">

      <h2 className="text-3xl font-bold mb-5 max-w-5xl m-auto text-center">Infinite Scroll Demo</h2>
      <div className="grid grid-cols-3 gap-7 max-w-5xl m-auto">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>

      <div
        ref={lastDivRef}
        className="w-full h-10 flex justify-center items-center text-gray-500"
      >
        Loading more...
      </div>
    </div>
  );
};

function ProductCard({ product }) {
  const { title, price, description, thumbnail } = product;
  return (
    <div className="bg-gray-200 p-4 rounded-md shadow hover:shadow-lg transition">
      <img
        src={thumbnail}
        alt={title}
        className="h-40 w-full object-cover rounded-md"
      />
      <h3 className="font-semibold mt-2">{title}</h3>
      <p className="text-sm text-gray-700 truncate">{description}</p>
      <p className="text-blue-600 font-bold mt-1">${price}</p>
    </div>
  );
}

export default InfiniteScroll;
