import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'





const Register = () => {

const navigate=useNavigate()

  const [inputs, setInputs] = useState({
    username:"",
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
      
      await axios.post('http://localhost:8800/api/auth/register',inputs)
      //console.log(res)
      navigate('/login')
    } catch (error) {

      setError(error.response.data)
      //console.log(error)
    }

    
  }

  

  //console.log(inputs)

  
  return (
    <>
      <div className="auth">
        <h1>Register</h1>
        <form>
          <input required type="text" placeholder="username" name='username' onChange={handleChange}/>
          <input required type="email" placeholder="email" name='email' onChange={handleChange}/>
          <input type="password" placeholder="password" name='password' onChange={handleChange}/>
          <button onClick={handleSubmit}>Register</button>
          {error && <p>{error}</p>}
          <span>Don't you have an account? <Link to='/login'>Login</Link></span>
        </form>
      </div>
    </>
  );
};

export default Register;
