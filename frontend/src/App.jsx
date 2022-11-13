import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";
import './style.scss'


function App() {


  const Layout=()=>{

   return(
    <>
    <Navbar/>
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
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
       
        {
          path: "/write",
          element: <Write />,
        },
        {
          path: "/post/:id",
          element: <Single />,
        }
      ]
    },
   
  ]);




  return (
    <div className="app">
      <div className="container">
         <RouterProvider router={router} />
      </div>
    </div>
  );

 
}

export default App;
