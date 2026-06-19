import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axiosInstance.get("/products");
      console.log("API Response:", res.data);
      setProducts(res.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Products</h2>

      <div className="row">
        {products.map((product) => (
          <div
            className="col-md-4 col-sm-6 mb-4"
            key={product._id}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;