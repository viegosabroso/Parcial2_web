import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Detail from "../pages/Detail/Detail";

const routes = createBrowserRouter([{
    path: '/',
    element: <Home />
  },{
    path: '/detail/:id',
    element: <Detail/>
  }
])

export default routes;