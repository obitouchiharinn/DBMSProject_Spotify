import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Nav from './nav.jsx'

const Artistid = () => {
 
    const [userDate1,setuserData]= useState([])
  

    useEffect(()=>{
     fetchData();
    })    

    const fetchData = async()=>{
     try{
       const result = await axios("http://localhost:6800/artistid");
       setuserData(result.data);
     } catch(err){
       console.log("something errrr");
     }
    }    



  return (
    <div>
        <Nav />
         
        <div>
       <main>
       <h1>Music Tracks</h1>
    <table>
        <thead>
            <tr>
                <th>SL.NO</th>
                <th>ArtistID</th>
                <th>Name</th>
                <th>Genre</th>
              
            </tr>
        </thead>
        <tbody>
            {
              userDate1.map((user,i)=>{
                return(
                   <tr key={i}>
                         <td>{i+1}</td>
                         <td>{user.artistid}</td>
                         <td>{user.name}</td>
                         <td>{user.genre}</td>
                        
                   </tr>
                )
              })

            }
        </tbody>
    </table>

       </main>
    </div>

    </div>
  )
}

export default Artistid
