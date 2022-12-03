import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { AuthContext } from "../context/authContext";

const Login = () => {


  const navigate=useNavigate()

  const {currentUser,login}=useContext(AuthContext)

  //console.log(currentUser)



  const [inputs, setInputs] = useState({
    email:"",
    password:""
  })

  const [error, setError] = useState(null)


  const handleChange =(e)=>{
    setInputs((prev)=> ({...prev,[e.target.name]:e.target.value}) )
  }





  const handleSubmit = async(e)=>{

    e.preventDefault()

    try {
      
      await login(inputs)
     
      navigate('/')
    } catch (error) {

     // setError(error.response.data)
      console.log(error)
    }

    
  }

  

  //console.log(inputs)



  return (
    <>
      <div className="auth">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="username" name="username" onChange={handleChange}/>
          <input type="password" placeholder="password" name="password" onChange={handleChange}/>
          <button onClick={handleSubmit}>Login</button>
          
          <span>Don't you have an account? <Link to='/register'>Register</Link></span>
        </form>
      </div>
    </>
  );
};

export default Login;
