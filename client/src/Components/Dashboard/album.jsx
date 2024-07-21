import React,{useEffect, useState} from 'react'
import Nav from './nav.jsx'
import axios from 'axios'

const Album = () => {
    const [userDate,setuserData]= useState([])
    useEffect(()=>{
        fetchData();
       })    

       const fetchData = async()=>{
        try{
          const result = await axios("http://localhost:6800/album");
          setuserData(result.data);
        } catch(err){
          console.log("something errrr");
        }
       }


  return (
    <div>
         <Nav />
          
         <main>
       <h1>Album</h1>
    <table>
        <thead>
            <tr>
                <th>SL.NO</th>
                <th>AlbumID</th>
                <th>title</th>
                <th>ArtistID</th>
                <th>Genre</th>
                <th>Release Date</th>
                
             
            </tr>
        </thead>
        <tbody>
            {
              userDate.map((user,i)=>{
                return(
                   <tr key={i}>
                         <td>{i+1}</td>
                         <td>{user.albumid}</td>
                         <td>{user.title}</td>
                         <td>{user.artistid}</td>
                         <td>{user.genre}</td>
                         <td>{user.relesedate}</td>
                         
                   </tr>
                )
              })

            }
        </tbody>
    </table>

       </main>
    </div>
  )
}

export default Album
