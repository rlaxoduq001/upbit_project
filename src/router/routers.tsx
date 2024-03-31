import { RouteObject } from "react-router-dom";
import { Layout } from "../pages/layout/Layout";
import { Main } from "../pages/main/Main";

const paths: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
    ],
  },
];

export default paths;
