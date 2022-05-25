import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-saidbar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="text-4xl font-bold text-primary">
          Welcome to Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashboard-saidbar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li className="text-primary">
            <Link to="/dashboard">My History</Link>
          </li>
          <li className="text-primary">
            <Link to="/dashboard/review">My Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
