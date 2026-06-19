import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <Link
          to={`/product/${product._id}`}
          className="text-decoration-none"
        >
          <h5 className="card-title">
            {product.name}
          </h5>
        </Link>

        <p className="card-text">
          {product.category}
        </p>

        <h6 className="mb-3">
          ₹{product.price}
        </h6>

        <button
          className="btn btn-success"
          onClick={() =>
            dispatch(addToCart(product))
          }
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;