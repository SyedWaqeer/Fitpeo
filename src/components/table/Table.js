import React from 'react';
import './Table.css';
import Customer1 from '../../assets/customer1.jpg'
import Customer2 from '../../assets/customer2.jpg'
import Customer3 from '../../assets/customer3.jpg'
import Customer4 from '../../assets/customer4.jpg'
import Customer5 from '../../assets/customer5.jpg'

const Table = () => {
  const orders = [
    { customer: "Velda Warner", orderNo: "154256", amount: "$123.45", status: "Delivered", userimg: `${Customer4}` },
    { customer: "Dianne Russell", orderNo: "996798", amount: "$623.45", status: "Delivered", userimg: `${Customer1}` },
    { customer: "Jenny Wilson", orderNo: "911399", amount: "$223.45", status: "Cancelled", userimg: `${Customer3}` },
    { customer: "Devon Lane", orderNo: "776892", amount: "$723.45", status: "Delivered", userimg: `${Customer2}` },
    { customer: "Harry Bold", orderNo: "812356", amount: "$523.45", status: "Cancelled", userimg: `${Customer5}` },
    // ... other orders
  ];
  return (
    <div className="card container bg-dark text-white">
      <h5 className='mt-3'>Recent Orders</h5>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderNo}>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src={order.userimg}
                    alt=""
                    style={{ width: '25px', height: '25px' }}
                    className="rounded-circle"
                  />
                  <div className="ms-2">
                    <p className="fw-bold mb-1">{order.customer}</p>
                  </div>
                </div>

              </td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <td>
                <span className={`badge ${order.status === 'Delivered' ? 'bg-success' : order.status === 'Cancelled' ? 'bg-danger' : 'bg-warning'}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default Table;