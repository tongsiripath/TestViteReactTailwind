import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const [values,setValues] = useState({
        name: "",
        email: "",
        password: ""
    })

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        //axios.post('http://localhost:8081/register', values)
        axios.post('http://tongsiripath.mypressonline.com/register', values)
        // .then(res => console.log(res))
        .then(res => {
            if(res.data.Status === "Success"){
                navigate('/login');
            }else{
                alert("Error");
            }
        })
        .then(err => console.error(err));
    }

  return (
    <div>
        Register
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={e => setValues({...values, name:e.target.value})}/>
            <input type="email" name="email" onChange={e => setValues({...values, email:e.target.value})}/>
            <input type="password" name="password" onChange={e => setValues({...values, password:e.target.value})}/>
            <button type="submit">Sign up</button>
        </form>
    </div>
  )
}

export default Register