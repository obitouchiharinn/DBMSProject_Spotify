import React,{useState}from 'react'
import './Login.css'
import '../../App.scss'
import Axios from 'axios'
import video from '../../LoginAssets/vid.mp4'
import {Link} from 'react-router-dom'
import logo from '../../LoginAssets/sp.png'
import {FaUserShield} from 'react-icons/fa'
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight} from "react-icons/ai";
 


const login = () => {

  const [loginusername,setloginusername]= useState('')
  const [loginpassword,setloginpassword]= useState('')
 
  const createLogin =()=>{
    Axios.post('http://localhost:6800/',{
      LoginUsername: loginusername,
      LoginPassword:loginpassword
    }).then((response)=>{
      console.log(response)
    })

  }



  return (
    <div className='loginPage flex'>
      <div className='contanier flex'>
        <div className='videoDiv'>
          <video src={video} autoPlay muted loop></video>

          <div className='textDiv'>
             <h2 className='title'> Create and Sell Extraordinary Products</h2>
             <p>Adopt the peace of nature</p>
          </div>
          <div className='footerDiv flex'>
              <span className='text'>Dons't have an account?</span>
              <Link to={'/register'}>
              <button className='btn'>Sign up</button></Link>
          </div>
        </div>

        <div className='formDiv flex'>
          <div className='headerDiv'>
            <img src={logo}></img>
            <h3 className='hh3'>Welcome Back</h3>
          </div> 
          <form action="" className='form grid'>
                {/* <span>Login Status Will Go Here</span> */}
                <div className='inputDiv'>
                  <label htmlFor="username">Username</label>
                  <div className='input flex'>
                  <FaUserShield className='icon'/>
                  <input type="text" id='username' onChange={(e)=>{
                    setloginusername(e.target.value)}} placeholder='Enter Username' />
                  </div>
                </div>

                <div className='inputDiv'>
                  <label htmlFor="password">Password</label>
                  <div className='input flex'>
                  <BsFillShieldLockFill className='icon'/>
                  <input type="password" id='password' placeholder='Enter Password' onChange={(e)=>{
                    setloginpassword(e.target.value)}} />
                  </div>
                </div>
                <Link to={'/home'}>
                <button type='submit' className='btn flex' onClick={createLogin}>
                  <span>Login</span>
                  <AiOutlineSwapRight className='icon'/>
                 </button></Link>

                 <span className='forgotPassword'>
        Forgot your password? <a href="">Click Here</a>
                 </span>

          </form>
        </div>
      </div>  
    </div>
  )
}

export default login
