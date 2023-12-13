// import {useNavigate} from "react-router-dom"
// import {useState} from "react";
// import axios from "axios"; 
// const Login =() =>{
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     console.log({username,password})
//     axios.post(' https://demo.credy.in/api/v1/usermodule/login/',{
//        username : username,
//        password:password
//     })
//       .then(result =>{
//         console.log(result.data)  

//       })
//       .catch(error =>{
//         console.log(error)
//       })
//     }
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Username and password are required');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // const response = await axios.post('https://demo.credy.in/api/v1/usermodule/login/', {
       const response = await axios.post('https://demo.onefin.in/api/v1/usermodule/login/', {
        username,
        password,
      });

      if (response.data.is_success) {
        const token = response.data.data.token;

        // Store the token in local storage
        localStorage.setItem('accessToken', token);

        // Redirect to the movies page
        // navigate.push('/movie');
        navigate('/movie');
      } else {
        setError('Invalid login credentials');
      }
    } catch (error) {
      console.error('Login failed:', error.message);
      setError('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };
     
    
      return( 
        <div className="login">
          <div className="holder">
            <h1 className="text-white">Sign In</h1>
            <br/>
            {/* <form  onSubmit > */}
            <form> 
              <input className="form-control" value={username} onChange = {(e) => setUsername(e.target.value)}   type="username"  placeholder="Username"/>
              <input 
              className="form-control" 
              value={password} onChange = {(e) => setPassword(e.target.value)} 
              type="password"  
              placeholder="Password"/>
              <button className="btn btn-danger btn-block" onClick={ handleLogin }>Sign In</button>
              <br/>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label text-white" htmlFor="flexCheckDefault">
                  Remember Me
                </label>
              </div>
            </form>
            <br/>
            <br/>
            {/* { isUserExist && <p className="text-danger">User does not exist | Go for Signup</p> }
            { isEmailUsed && <p className="text-danger">Email already in use | Go for Sign In</p> } */}
            <div className="login-form-other">
              <div className="login-signup-now">
              New to Netflix? &nbsp;
                <a className=" " target="_self" herf="/">
                Sign up now
                </a>.
              </div>  
            </div>
          </div>
          <div className="shadow"></div>
          <img className="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
        </div>
      )
    
          }
export default Login; 
          
