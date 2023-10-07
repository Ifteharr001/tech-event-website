import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Pages/Home/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
    {
        path: "/",
        element: <Home></Home>
    }
]
  },
]);




export default Router;