import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios  from "axios";

const Login = () => {
    const [values,setValues] = useState({        
        email: "",
        password: ""
    })

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        //axios.post('http://localhost:8081/login', values)
        axios.post('http://tongsiripath.mypressonline.com/login', values)
        //.then(res => console.log(res))
        .then(res => {
            if(res.data.Status === "Success"){
                navigate('/reacttest');
            }else{
                alert("Error");
            }
        })
        .then(err => console.error(err));
    }

  return (
    <div>
        Login
        <form onSubmit={handleSubmit}>            
            <input type="email" name="email" onChange={e => setValues({...values, email:e.target.value})}/>
            <input type="password" name="password" onChange={e => setValues({...values, password:e.target.value})}/>
            <button type="submit">Sign in</button>
        </form>
    </div>
  )
}

export default Login