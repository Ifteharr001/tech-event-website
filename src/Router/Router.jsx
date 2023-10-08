import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/about",
        element: <About></About>
    }
]
  },
]);




export default Router;