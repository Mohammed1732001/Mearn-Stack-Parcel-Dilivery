import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import MyParcels from "./pages/MyParcels.jsx"
import Parcels from "./pages/Parcels.jsx"
import Parcel from "./pages/Parcel.jsx"
function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <Home />
    },
    {
      path: "/login", element: <Login />
    },
    {
      path: "/Myparcels", element: <MyParcels />
    },
    {
      path: "/parcels ", element: <Parcels />
    },
    {
      path: "/parcel/:id", element: <Parcel />
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
