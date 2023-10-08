import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import ServiceDetail from "../Pages/ServiceDetails/ServiceDetail";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: <ServiceDetail></ServiceDetail>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);




export default Router;