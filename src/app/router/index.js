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
import QueryDetails from "../pages/QueryDetails";
import UpdateQueries from "../pages/UpdateQueries";
import AddQueries from "../pages/AddQueries";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
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
        path: "/addqueries",
        element: (
          <PrivateRoute>
            <AddQueries />s
          </PrivateRoute>
        ),
      },
      {
        path: "/editqueries/:id",
        element: (
          <PrivateRoute>
            <UpdateQueries />
          </PrivateRoute>
        ),
      },
      {
        path: "/queiresdetails/:id",
        element: (
          <PrivateRoute>
            <QueryDetails />
          </PrivateRoute>
        ),
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
