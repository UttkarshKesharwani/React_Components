import { useEffect, useState } from "react";

const useFetch = (api) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      async function getData() {
        console.log("called func");
        const data = await fetch(api);
        const res = await data.json();
        setProducts(res.products);
      }
      getData();
    } catch (error) {
      setError(error.message);
    }
  }, []);

  return {products,error}
};

export default useFetch;
