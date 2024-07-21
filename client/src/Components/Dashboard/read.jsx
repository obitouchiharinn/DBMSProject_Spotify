import React,{useEffect,useState}from 'react'
import {useParams} from 'react-router-dom'
import Nav1 from './nav1.jsx';
import Axios from 'axios'
import {Link} from 'react-router-dom'

const Read = () => {
      const {id}=useParams();
      const [sid,setsid]= useState([])
    useEffect(()=>{
      Axios.get('http://localhost:6800/read/'+id)
      .then(res=>{
        console.log(res)
        setsid(res.data[0]);
    })
      .catch(err=> console.log(err))
    },[])
  return (
    <div>
          <h2>Read</h2>
          <h2>{sid.id}</h2>
          <h2>{sid.sname}</h2>
          <h2>{sid.singername}</h2>
          <h2>{sid.stype}</h2>
          <h2>{sid.slink}</h2>
          <Link to={'/home'}>BACK</Link>
          
    </div>
  )
}

export default Read
