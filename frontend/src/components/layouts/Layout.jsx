import { BrowserRouter as Router } from "react-router-dom";
import Routers from "@/routes/Routers";


const Layout = () => {

  return (
    <>
      <Router>
        <Routers />
      </Router>
    </>
  )
}

export default Layout