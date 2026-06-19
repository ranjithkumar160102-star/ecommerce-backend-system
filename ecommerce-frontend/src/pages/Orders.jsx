function Orders() {
  const orders = [
    {
      id: 1,
      product: "iPhone 15",
      price: 75000,
      status: "Delivered",
    },
  ];

  return (
    <div className="container mt-4">
      <h2>My Orders</h2>

      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.product}</td>
              <td>₹{order.price}</td>
              <td>
                <span className="badge bg-success">
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;