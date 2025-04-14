import { useRoutes } from "react-router-dom";
import MainPage from "../components/MainPage/MainPage";
import Movies from "../components/Movies/Movies";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import NotFound from "../components/NotFound";
import Layout from "../components/Layout";
import PrivateRoute from "../components/PrivateRoutes";
import PublicRoute from "../components/PublicRoutes";

const AppRoutes = () => {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <MainPage /> },
        {
          path: "movies",
          element: (
            <PrivateRoute>
              <Movies />
            </PrivateRoute>
          ),
        },
        {
          path: "login",
          element: (
            <PublicRoute>
              <Login />
            </PublicRoute>
          ),
        },
        {
          path: "register",
          element: (
            <PublicRoute>
              <Register />
            </PublicRoute>
          ),
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ];

  return useRoutes(routes);
};

export default AppRoutes;
