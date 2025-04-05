import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Parcels from "./pages/Parcels.jsx"
import Parcel from "./pages/Parcel.jsx"
import Navbar from "./compnante/Navbar.jsx"
import Menue from "./compnante/Menue.jsx"
import Footer from "./compnante/Footer.jsx"
import Users from "./pages/Users.jsx"
import NewParcel from "./pages/NewParcel.jsx"
import NewUser from "./pages/NewUser.jsx"
import Login from "./pages/Login.jsx"
function App() {

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div className="d-flex">
          <div className="w-25">
            <Menue />
          </div>
          <div className="w-75">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }




  const router = createBrowserRouter([{
    path: "/", element: <Layout />,
    children: [
      {
        path: "/", element: <Home />
      },
      {
        path: "/Parcels", element: <Parcels />
      },
      {
        path: "/newparcel", element: <NewParcel />
      },
      {
        path: "/newuser", element: <NewUser />
      },
      {
        path: "/Parcel/:parcelId", element: <Parcel />
      },
      {
        path: "/Users", element: <Users />
      },
    ]
  },
  {
    path: "/Login", element: <Login />
  }

  ])

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
