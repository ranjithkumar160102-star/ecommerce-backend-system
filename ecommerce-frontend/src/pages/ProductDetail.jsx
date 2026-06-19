import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await axiosInstance.get("/products");

      const selectedProduct = res.data.find(
        (item) => item._id === id
      );

      setProduct(selectedProduct);
    } catch (error) {
      console.log(error);
    }
  };

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Product Details</h2>

      <h3>{product.name}</h3>

      <p>Category: {product.category}</p>

      <p>Price: ₹{product.price}</p>

      <p>Description: {product.description}</p>
    </div>
  );
}

export default ProductDetail;