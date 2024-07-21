
import React,{useEffect, useState} from 'react'
import audio from '../../LoginAssets/audio.opus'
import axios from 'axios'
import Nav from './nav.jsx'
const Song = () => {

  // const [track, settrack]= useState('')
  // const [title, settitle]= useState('')
  // const [artistid, setartistid]= useState('')
  // const [albumid, setalbumid]= useState('')
  // const [duration, setduration]= useState('')
  // const [relese, setrelese]= useState('')

    const [userDate,setuserData]= useState([])
  

           useEffect(()=>{
            fetchData();
           })    

           const fetchData = async()=>{
            try{
              const result = await axios("http://localhost:6800/Dashboard");
              setuserData(result.data);
            } catch(err){
              console.log("something errrr");
            }
           }



  return (
    
    <div>
     
       <main>
       <h1>Music Tracks</h1>
    <table>
        <thead>
            <tr>
                <th>SL.NO</th>
                <th>TrackID</th>
                <th>Title</th>
                <th>ArtistID</th>
                <th>AlbumID</th>
                <th>Duration</th>
                <th>ReleaseDate</th>
                <th>Genre</th>
                <th>Artist Name</th>
            </tr>
        </thead>
        <tbody>
            {
              userDate.map((user,i)=>{
                return(
                   <tr key={i}>
                         <td>{i+1}</td>
                         <td>{user.trackid}</td>
                         <td>{user.title}</td>
                         <td>{user.artistid}</td>
                         <td>{user.albumid}</td>
                         <td>{user.duration}</td>
                         <td>{user.relesedate}</td>
                        <td>{user.genre}</td>
                         <td>{user.artistname}</td>
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

export default Song
