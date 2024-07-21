import React,{useState} from 'react'
import Axios from 'axios'
import '../../App.scss'
import video from '../../LoginAssets/vid.mp4'
import {Link} from 'react-router-dom'
import logo from '../../LoginAssets/sp.png'
import {FaUserShield} from 'react-icons/fa'
import { BsFillShieldLockFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import { AiOutlineSwapRight} from "react-icons/ai";



const Register = () => {

  const [email, setemail]= useState('')
  const [username, setusername]= useState('')
  const [password, setpassword]= useState('')
    
  // const myfun = () =>{
  //   if(username.length === 0) {
  //     alert("PLs Enter the name")
  //   }
  //   else if(email.length ===0)
  //     {
  //       alert("Pls Enter the email")
  //     }
  //     else if(password.length ===0)
  //       {
  //         alert("pls enter the password")
  //       }
  //       else{
  //         let url = 'https://localhost/test/formsubmit.php';
  //       }
  // }
 

const createUser =()=>{
  Axios.post('http://localhost:6800/register',{
    Email: email,
    UserName: username,
    Password:password
  }).then(()=>{
    console.log('user has benn created')
  })
}



  return (
    <div className='registerPage flex'>
      <div className='contanier flex'>
        <div className='videoDiv'>
          <video src={video} autoPlay muted loop></video>

          <div className='textDiv'>
             <h2 className='title'> Create and Sell Extraordinary Products</h2>
             <p>Adopt the peace of nature</p>
          </div>
          <div className='footerDiv flex'>
              <span className='text'>Have an account?</span>
              <Link to={'/'}>
              <button className='btn'>Login</button></Link>
          </div>
        </div>

        <div className='formDiv flex'>
          <div className='headerDiv'>
            <img src={logo}></img>
            <h3 className='hh3'>Let Us Know You!</h3>
          </div> 
          <form action=""  className='form grid'>
                {/* <span>Login Status Will Go Here</span> */}
                <div className='inputDiv'>
                  <label htmlFor="email">Email</label>
                  <div className='input flex'>
                  <MdMarkEmailRead  className='icon'/>
                  <input type="email" id='email' name='email' placeholder='Enter Email' onChange={(e)=>{
                    setemail(e.target.value)
                  }}/>
                  </div>
                </div>

                <div className='inputDiv'>
                  <label htmlFor="username">Username</label>
                  <div className='input flex'>
                  <FaUserShield className='icon'/>
                  <input type="text" id='username' name='username' placeholder='Enter Username' onChange={(e)=>{
                    setusername(e.target.value)
                  }}/>
                  </div>
                </div>

                <div className='inputDiv'>
                  <label htmlFor="password">Password</label>
                  <div className='input flex'>
                  <BsFillShieldLockFill className='icon'/>
                  <input type="password" id='password' name='password' placeholder='Enter Password' onChange={(e)=>{
                    setpassword(e.target.value)
                  }} />
                  </div>
                </div>
              <Link to={'/'}>
                <button type='submit' className='btn flex' onClick={createUser}>
                  <span>Register</span>
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

export default Register
