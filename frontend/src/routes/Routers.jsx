import React, {useState,useEffect} from "react";
import RootRoutes from "./RootRoutes";





const Routers = () => {
   
    const [Value, setElement] = useState("");
   
  useEffect(() => {   
    
        setElement(<RootRoutes />)
    
    
  }, []);
  
  return (
    <>        
        {Value}        
    </>    
  )
}

export default Routers