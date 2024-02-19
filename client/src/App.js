import './App.css';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Write from './pages/Write';
import Home from './pages/Home';
import Single from './pages/Single';
import Footer from './components/Footer';

const Layout = () => {  
return(
  <>
    <Home/>
    <Outlet/>
    <Footer/>
  </>
)  
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {path:"/", element:<Home/>},
      {path:"/single", element:<Single/>},
      {path:"/write", element:<Write/>},
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

const  App = ()=> {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}


export default App;
