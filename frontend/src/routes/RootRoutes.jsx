import { Routes, Route, BrowserRouter } from "react-router-dom";
import RootLayout from "@/components/layouts/RootLayout";
import Home from "@/pages/root/Home";
import About from "@/pages/root/About";
import Contact from "@/pages/root/Contact";
import Register from "@/pages/root/Register";
import Notfound from "@/pages/root/Notfound";
import Login from "@/pages/root/Login";




const RootRoutes = () => {
 
  return (   
     
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />   
          <Route path="/about" element={<About />} />     
          <Route path="/contact" element={<Contact />} />    
          <Route path="/register" element={<Register />} />  
          <Route path="/login" element={<Login />} />    
          <Route path="*" element={<Notfound />} />           
        </Route>        
      </Routes>  
      // <BrowserRouter>
      // </BrowserRouter>
     
  )
}

export default RootRoutes