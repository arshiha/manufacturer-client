import "./App.css";
import Navbar from "./Pages/Shared/Navbar.js";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import Blog from "./Pages/Blog/Blog.js";
import About from "./Pages/About/About.js";
import Login from "./Pages/Login/Login.js";
import Purchase from "./Pages/Purchase/Purchase.js";
import NotFound from "./Pages/Shared/NotFound/NotFound.js";
import SignUp from "./Pages/Login/SignUp.js";
import Dashboard from "./Pages/Dashboard/Dashboard.js";
import RequireAuth from "./Pages/Login/RequireAuth.js";
import MyReview from "./Pages/Dashboard/MyReview.js";
import MyHistory from "./Pages/Dashboard/MyHistory.js";
import AddReview from "./Pages/AddReview/AddReview.jsx";
// import MyProfile from "./Pages/Dashboard/MyProfile.js";
// import AddProduct from "./Pages/Dashboard/AddProduct.js";
// import ManageOrders from "./Pages/Dashboard/ManageOrders.js";
// import ManageUser from "./Pages/Dashboard/ManageUser.js";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/addreview" element={<AddReview />} />

        <Route
          path="/purchase/:productId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        />

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          {/* <Route index element={<MyProfile></MyProfile>}></Route>
          <Route index element={<AddProduct></AddProduct>}></Route>
          <Route index element={<ManageOrders></ManageOrders>}></Route>
          <Route index element={<ManageUser></ManageUser>}></Route> */}
          <Route index element={<MyHistory></MyHistory>}></Route>
          <Route path="addreview" element={<AddReview />} />

          {/* <Route path="review" element={<MyReview></MyReview>}></Route> */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
