import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/home/Home.jsx";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import CartPage from "../pages/book/CartPage.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import OrderPage from "../pages/book/OrderPage.jsx";
import AdminRoute from "./AdminRoute.jsx";
import CheckOutPage from "../pages/book/CheckOutPage.jsx";
import SingleBook from "../pages/book/SingleBook.jsx";
import UserDashboard from "../pages/Dashboard/Users/UserDashboard.jsx";
import AdminLogin from "../components/AdminLogin.jsx";
import DashboardLayout from "../pages/Dashboard/DashboardLayout.jsx";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import AddBook from "../pages/Dashboard/AddBook/AddBook.jsx";
import UpdateBook from "../pages/Dashboard/EditBook/UpdateBook.jsx";
import ManageBooks from "../pages/Dashboard/ManageBooks/ManageBooks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <OrderPage />
          </PrivateRoute>
        ),
      },
      { path: "/about", element: <div>About</div> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/cart", element: <CartPage /> },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <CheckOutPage />
          </PrivateRoute>
        ),
      },
      { path: "/books/:id", element: <SingleBook /> },
      {
        path: "/user-dashboard",
        element: (
          <PrivateRoute>
            <UserDashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "/admin", element: <AdminLogin /> },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    children: [
      { path: "", element: <Dashboard /> },
      { path: "add-new-book", element: <AddBook /> },
      { path: "edit-book/:id", element: <UpdateBook /> },
      { path: "manage-books", element: <ManageBooks /> },
    ],
  },
  // 404 Route to catch undefined paths
  { path: "*", element: <div>Page Not Found</div> },
]);

export default router;
