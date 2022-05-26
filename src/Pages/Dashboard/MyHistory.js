import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init.js";
// import Products from "../Home/Products.js";

const MyHistory = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/product?orderQuantity=${user.order}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);
  return (
    <div>
      <h2>My history: {orders.length}</h2>
      <div class="overflow-x-auto text-primary">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Min Order</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{o.name}</td>
                <td>{o.price}</td>
                <td>{o.quantity}</td>
                <td>{o.order}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyHistory;
