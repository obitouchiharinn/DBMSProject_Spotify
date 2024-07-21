import React,{useState,useEffect} from 'react'
import Axios1 from 'axios'
import {Link} from 'react-router-dom'
import { AiOutlineSwapRight} from "react-icons/ai";
import {useParams,useNavigate} from 'react-router-dom'

const Update = () => {

       const {id} = useParams();
       const navigate= useNavigate()
    
       useEffect(()=>{
        Axios1.get('http://localhost:6998/read/'+id)
        .then(res=>{
          console.log(res)
          setValues({...values, id: res.data[0].id,
             sname: res.data[0].sname,
        singername: res.data[0].singername,
             stype: res.data[0].stype,
             slink: res.data[0].slink
            });
      })
        .catch(err=> console.log(err))
      },[])


    const [values, setValues]=useState({
        id:'',
        sname:'',
        singername:'',
        stype:'',
        slink:''
    })

       const handleupdate =(e) =>{
        e.preventDefault();
        Axios1.put('http://localhost:6800/update/'+id,values)
        .then(res=>{
            console.log(res);
            navigate('/home');
        }).catch(err=> console.log(err))
       }
  

  return (
    <div>
          <div>
        <h1>Upload Your Song Here</h1>
        <div className='contanier flex'>
     <div className='formDiv flex'>
      
      <form action="" className='form grid' onSubmit={handleupdate} >
     
      <div className='inputDiv'>
        <label htmlFor='slink'>Id</label>
        <div className='input flex'>
        <input type="text" value={values.id} name="slink" id="slink" placeholder='Enter Song id' onChange={e => setValues({...values, id:e.target.value})} />
        </div>
    </div>     <div className='inputDiv'>
        <label htmlFor='sname'>Song Name</label>
        <div className='input flex'>
        <input type='text' value={values.sname}  placeholder='Enter Song Name' id='sname' name='sname' onChange={e => setValues({...values, sname:e.target.value})}></input>
     </div>
     </div>
     <div className='inputDiv'>
        <label htmlFor='singername'>Singer Name</label>
        <div className='input flex'>
        <input type='text' value={values.singername}  placeholder='Enter Singer Name' id='singername' name='singername' onChange={e => setValues({...values, singername:e.target.value})}></input>
    </div>
    </div>
    <div className='inputDiv'>
        <label htmlFor='stype' >Song Type </label>
        <div className='input flex'>
        <input type='text' name='stype' value={values.stype}  placeholder='Enter Song Type' id='stype' onChange={e => setValues({...values, stype:e.target.value})}></input>
    </div>
    </div>
    <div className='inputDiv'>
        <label htmlFor='slink'>Song Link</label>
        <div className='input flex'>
        <input type="text" name="slink" value={values.slink}  id="slink" placeholder='Enter Song Link' onChange={e => setValues({...values, slink:e.target.value})} />
        </div>
    </div>
    
   
    
            
                  <button type='submit' className='btn flex'  >
                  <span>Update</span>
                  <AiOutlineSwapRight className='icon'/>
                 </button>
                   <Link to={'/home'}>
                 <button type='submit' className='btn flex'  >
                  <span>Back</span>
                  <AiOutlineSwapRight className='icon'/>
                 </button>
                 </Link>
      </form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Update
