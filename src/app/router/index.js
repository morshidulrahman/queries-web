import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AllQueries from "../pages/AllQueries";
import Recommendation from "../pages/Recommendation";
import MyQueries from "../pages/MyQueries";
import Myrecommendation from "../pages/Myrecommendation";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/queries",
        element: <AllQueries />,
      },
      {
        path: "/recommendation",
        element: <Recommendation />,
      },
      {
        path: "/myqueries",
        element: (
          <PrivateRoute>
            <MyQueries />
          </PrivateRoute>
        ),
      },
      {
        path: "/myrecommendations",
        element: (
          <PrivateRoute>
            <Myrecommendation />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
