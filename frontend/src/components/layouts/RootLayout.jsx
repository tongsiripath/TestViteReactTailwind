import { Outlet } from "react-router-dom";
import Navbar from "@/components/pages/root/Navbar";
import Footer from "@/components/pages/root/Footer";


const RootLayouts = () => {
 
  return (
    <div>   
        <Navbar/> 
          <Outlet /> 
        <Footer/>
    </div> 
  )
}

export default RootLayouts