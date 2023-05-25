import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch(import.meta.env.VITE_API+'/users')
    //fetch('http://localhost:8081/users')
    .then(res=>res.json())
    .then(result=>{
      setUsers(result)
    })
  },[])

  return (
    <div>
      Home Root Page
      <ul>
        {
          users.map((user,index)=>(
            <li key={index}>{user.id} {user.name} {user.password}</li>
          ))
        }
      </ul>

      <Link to={'/about'}>เกี่ยวกับเรา</Link>
      <Link to={'/contact'}>ติดต่อเรา</Link>
      <Link to={'/login'}>เข้าสู่ระบบ</Link>
      <Link to={'/register'}>สมัครสมาชิก</Link>
    </div>
  )
}

export default Home