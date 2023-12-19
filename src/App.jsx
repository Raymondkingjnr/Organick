import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Contact, Error, Home, Landing, News, Service } from "./page";
import Login from "./page/Login";
import Register from "./page/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "service",
        element: <Service />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
