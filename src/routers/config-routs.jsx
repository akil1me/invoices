import { useSelector } from "react-redux";
import { Navigate, useRoutes } from "react-router-dom";

// pages
import { AddInvoices, EditeInvoices, Invoices, Login, ViewInvoices, NotFound, Register } from "../pages";

const authRout = [
  {
    path: "/login",
    element: <Login />

  },

  {
    path: "/register",
    element: <Register />
  }
]

export const ConfigRouts = () => {
  const { user } = useSelector(item => item.user);

  const routs = [
    {
      path: "/",
      element: <Invoices />
    },
    {
      path: "/view/:id",
      children: [
        {
          path: "",
          element: <ViewInvoices />
        },
        {
          path: "edite",
          element: user ? <EditeInvoices /> : <Navigate to={"/login"} />,
        },
      ]
    },
    {
      path: "/add",
      element: user ? <AddInvoices /> : <Navigate to={"/login"} />,
    },

    {
      path: "*",
      element: <NotFound />
    }
  ]

  const elements = useRoutes([...(!user ? authRout : []), ...routs]);
  return elements;
}