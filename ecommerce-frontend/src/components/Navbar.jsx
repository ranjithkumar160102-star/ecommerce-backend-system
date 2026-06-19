import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          E-Commerce
        </Link>

        <div className="navbar-nav ms-auto">
          <Link className="nav-link text-white" to="/">
            Home
          </Link>

          {token ? (
            <button
              className="btn btn-danger mx-2"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link
              className="nav-link text-white"
              to="/login"
            >
              Login
            </Link>
          )}

          <Link
            className="nav-link text-white"
            to="/cart"
          >
            Cart
          </Link>

          <Link
            className="nav-link text-white"
            to="/orders"
          >
            Orders
          </Link>

          <Link
            className="nav-link text-white"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;