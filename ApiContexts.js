import { createContext, useState } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  };

  return (
    <ApiContext.Provider value={{ products, fetchProducts, loading }}>
      {children}
    </ApiContext.Provider>
  );
};
