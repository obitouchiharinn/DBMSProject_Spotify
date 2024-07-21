import React,{useState,useEffect} from 'react'
import Nav1 from './nav1.jsx';
import Axios from 'axios'
import {Link} from 'react-router-dom'


const Home = () => {
        
    const [data,setdata]=useState([])
     useEffect(()=>{
        Axios.get('http://localhost:6800/Home')
        .then(res=>setdata(res.data))
        .catch(err=>console.log(err));
     },[])
 
   const handledelete = (id) =>{
    Axios.delete('http://localhost:6800/delete/' +id)
    .then(res=>{
       location.reload();
    })    
     .catch(err=>console.log(err));
   }
  return (
    <div>
       <Nav1 />
       <main>
       <h1>Music Tracks</h1>
       <div className='footerDiv flex'>
              <Link to={'/admin'}>
              <button className='btn'>Create</button></Link>
          </div>
       
    <table>
        
        <thead>
            <tr>
                <th>ID</th>
                <th>Song Name</th>
                <th>Singer Name</th>
                <th>Song Type</th>
                <th>Song Link</th>
                <th>Action</th>
               
            </tr>
        </thead>
        <tbody>
            { 
            data.map((home,index)=>{
                 return <tr key={index}>
                     
              <td>{home.id}</td>
              <td>{home.sname}</td>
              <td>{home.singername}</td>
              <td>{home.stype}</td>
              <td>{home.slink}</td>
              <td>
                  <Link to={`/read/${home.id}`}><button>Read</button></Link>
                  <Link to={`/update/${home.id}`}><button>Edit</button></Link>
                <button onClick={()=> handledelete(home.id)}>Delete</button>
              </td>

                 </tr>
                      
              })

            }
        </tbody>
    </table>

       </main>
    </div>
  )
}

export default Home
