import React,{useState} from 'react'
import Axios1 from 'axios'
import {Link} from 'react-router-dom'
import { AiOutlineSwapRight} from "react-icons/ai";
const Input = () => {

  const [values, setValues]=useState({
    id:'',
    sname:'',
    singername:'',
    stype:'',
    slink:''
})
       

     const handlesubmit= (e)=>{

        e.preventDefault();
      Axios1.post('http://localhost:6800/admin',values)
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
     
     }


  return (
    <div>
          <div>
        <h1>Upload Your Song Here</h1>
        <div className='contanier flex'>
     <div className='formDiv flex'>
      
      <form action="" className='form grid'onSubmit={handlesubmit} >
     
      <div className='inputDiv'>
        <label htmlFor='slink'>Id</label>
        <div className='input flex'>
        <input type="text"  name="slink" id="slink" placeholder='Enter Song id' onChange={e => setValues({...values, id:e.target.value})} />
        </div>
    </div>     <div className='inputDiv'>
        <label htmlFor='sname'>Song Name</label>
        <div className='input flex'>
        <input type='text' placeholder='Enter Song Name' id='sname' name='sname' onChange={e => setValues({...values, sname:e.target.value})}></input>
     </div>
     </div>
     <div className='inputDiv'>
        <label htmlFor='singername'>Singer Name</label>
        <div className='input flex'>
        <input type='text' placeholder='Enter Singer Name' id='singername' name='singername' onChange={e => setValues({...values, singername:e.target.value})}></input>
    </div>
    </div>
    <div className='inputDiv'>
        <label htmlFor='stype' >Song Type </label>
        <div className='input flex'>
        <input type='text' name='stype'   placeholder='Enter Song Type' id='stype' onChange={e => setValues({...values, stype:e.target.value})}></input>
    </div>
    </div>
    <div className='inputDiv'>
        <label htmlFor='slink'>Song Link</label>
        <div className='input flex'>
        <input type="text" name="slink" id="slink" placeholder='Enter Song Link' onChange={e => setValues({...values, slink:e.target.value})} />
        </div>
    </div>
    
   
    
            <footer className='foot'>
                  <button type='submit' className='btn flex'  >
                  <span>Submit</span>
                  <AiOutlineSwapRight className='icon'/>
                 </button>
                   <Link to={'/home'}>
                 <button type='submit' className='btn flex'  >
                  <span>Back</span>
                  <AiOutlineSwapRight className='icon'/>
                 </button>
                 </Link>
                 </footer>
      </form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Input
