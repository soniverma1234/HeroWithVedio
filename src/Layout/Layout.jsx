import { Outlet } from "react-router-dom"
import Navbar from "../Componenets/Navbar"

const Layout = () => {
  return (
    <>
     <Navbar/> 
     <main>
        <Outlet/>
     </main>
    </>
  )
}

export default Layout
