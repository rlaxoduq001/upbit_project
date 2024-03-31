import "./App.css";
import router from "../src/router/routers";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

const RouterObject = createBrowserRouter(router);

function App() {
  return <RouterProvider router={RouterObject} />;
}

export default App;
