
import React, {useState} from 'react';
import axios from 'axios';
import  'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate} from "react-router-dom";

import {setToken, removeToken, fetchToken} from '../Auth'


const API_SERVER_BASE = process.env.REACT_APP_API_SERVER_BASE
const API_SERVER_TOKEN = process.env.REACT_APP_API_SERVER_TOKEN


function Login(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  async function  getToken(){
    let API_resource = API_SERVER_BASE + API_SERVER_TOKEN

    // todo validate the user and password are valid
    let bodyFormData = new FormData();
    bodyFormData.append('username', username);
    bodyFormData.append('password', password);

    try{
      let res = await axios({
                  method: 'post',
                  url: API_resource,
                  data: bodyFormData,
                  headers: { "Content-Type": "application/x-www-form-urlencoded" }
                })
      return res.data.access_token  
    }
    catch(err){
          console.log(err); 
    }        
  }

 

  async function handleSubmit(e){
    e.preventDefault();
    try{
      removeToken();
      // todo add better validations
      if (username === '' || password === ''){
        console.log('The username or password is missing.')
        return
      }
      else{
        // ! I need that this function AND getToken to be async, so they execute in order
        let token = await getToken()
        if (token){
          setToken(token)
          navigate("./dashboard")
        }
      }
    }
    catch(err){
          console.log(err); 
    }     
  }

  return (
    <>
        <h1> Login </h1>
        <form onSubmit={handleSubmit}>
          <div style = {{marginLeft:50, marginTop:20 }} >
            <label> username </label>
            <br></br>
            <input type="text" name="username" value={username} onChange={ e => setUsername(e.target.value)}/>
            <br></br><br></br>
            <label> password </label>
            <br></br>
            <input type="password" name="password" value={password} onChange={ e => setPassword(e.target.value)}/>
            <br></br>
          </div>
          <div style = {{marginLeft:200, marginTop:10}} >
            <button type="submit" > submit</button>
          </div>
        </form>    
    </>
  )

}

export default Login;

