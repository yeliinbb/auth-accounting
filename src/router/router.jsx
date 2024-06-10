import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Login from "../pages/LoginPage/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    // children: [
    //   { path: "login", element: <Login /> },
    //   { path: "home", element: <Home /> },
    //   { path: "detail/:id", element: <Detail /> },
    // ],
  },
  { path: "/home", element: <Home /> },
  { path: "/detail/:id", element: <Detail /> },
]);

export default router;
