const express= require('express')
const app =express()
const mysql = require('mysql')
const cors = require('cors');
const port=6800;


app.use(express.json())
app.use(cors())


app.listen(port, ()=>{
    console.log('server is running',port)
})



const db=mysql.createConnection({
    user:'root', 
    host:'localhost',
    password:'',
    database:'reggg',
})


db.connect(function(err){
    if(err){
        console.log("error is connection");
    }else{
        console.log("connected");
    }
})



app.post('/register', (req,res)=>{

     const sentEmail = req.body.Email
     const sentUserName = req.body.UserName
    const sentPassword = req.body.Password

    const SQL = "INSERT INTO sachu(email,username,password) VALUES (?)"
     const Values =[sentEmail, sentUserName, sentPassword]
     
     db.query(SQL, [Values], (err,result) => {
        if(err) return res.json({Error:"error signup"});
        return res.json({status:"sucess very good"})
     })
})

// login

// app.post('/',(req,res)=>{
   
//     const sentLoginUserName = req.body.LoginUsername
//    const sentLoginPassword = req.body.LoginPassword

//    const SQL111 = 'SELECT * FROM sachu WHERE username = ? && password = ?'
//     const Values99 =[sentLoginUserName, sentLoginPassword]
//     db.query(SQL111, [Values99], (err,result) => {
//         if(err){
//             res.send({error:err})
//         }
//         if(result.length > 0){
//             res.send(result)
//         }
//         else{
//             res.send({message:`creadinitils dont match`})
//         }
//      })
// })




// const upload = multer({storange})


// app.post('/adminn',upload.single('file'),(req,res)=>{
//      const sentsongname=req.body.SNAME
//      const sentgenre=req.body.SGENRE
//      const sentdate=req.body.SDATE
//      const sentimg=req.file.SIMG




    //  const sentaudio=req.file.SAUDIO
     
//      const SQL1 = "INSERT INTO www(song,genre,date,img) VALUES(?)"
//      const Values1=[sentsongname,sentgenre,sentdate,sentimg]
//      db.query(SQL1,[Values1],(err,result)=>{
//         if(err) return res.json({Error:"error signup"});
//         return res.json({status:"sucess very good"})
//      })
// })

// const upload=multer({dest:'./public/images'})
// app.post('/adminn',upload.single("simg"), async(req,res)=>{
//     console.log(req.body);
//     res.json("uploades");
//     res.send("uploads");
// })



//track
app.get('/Dashboard',(req,res)=>{
    db.query("SELECT * FROM track1",(err,result)=>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/Dashboard',(req,res)=>{
    const q="INSERT INTO track(trackid,title,artistid,albumid,duration,relesedate,genre,artistname) VALUES (?)"
    const values2 = [
        req.body.trackid,
        req.body.title,
        req.body.artistid,
        req.body.albumid,
        req.body.duration,
        req.body.relesedate,
        req.body.genre,
        req.body.artistname
    ];

    db.query(q,[values2],(err,data)=>{
        if(err) return res.json(err)
            return res.json("book has been creasted")
    })
})

// artiist

app.get('/artistid',(req,res)=>{
    db.query("SELECT * FROM artist",(err,result)=>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/artistid',(req,res)=>{
    const q3="INSERT INTO artist(artistid,name,genre) VALUES (?)"
    const values3 = [
        req.body.artistid,
        req.body.name,
        req.body.genre
    ];

    db.query(q3,[values3],(err,data)=>{
        if(err) return res.json(err)
            return res.json("book has been creasted")
    })
})

// Home

app.get('/home',(req,res)=>{
    const SQL3 = "SELECT * from home1"
    db.query(SQL3,(err,result)=>{
        if(err) return res.json({Message: "error inside server"});
        return res.json(result);
    })
})

app.post('/admin',(req,res)=>{
    const SQL4 = "INSERT INTO home1 (`id`,`sname`,`singername`,`stype`,`slink`) VALUES (?)";
    const values4 =[
        req.body.id,
        req.body.sname,
        req.body.singername,
        req.body.stype,
        req.body.slink
    ];
    db.query(SQL4, [values4] ,(err,result)=>{
        if(err) return res.json(err);
       return res.json(result);
    })
})
//delete
app.delete('/delete/:id',(req,res)=>{
      const sql6 = "DELETE FROM home1 WHERE ID = ?";
      const id = req.params.id;
      db.query(sql6,[id],(err,result)=>{
        if(err) return res.json({Message:"error"});
        return res.json(result)
      })
})

//read
app.get('/read/:id',(req,res)=>{
    const SQL8 = "SELECT * from home1 WHERE ID = ?";
    const id1=req.params.id;

    db.query(SQL8,[id1],(err,result)=>{
        if(err) return res.json({Message: "error inside server"});
        return res.json(result);
    })
})

//update

app.put('/update/:id',(req,res)=>{
    const sql11 = 'UPDATE home1 SET `id` = ? , `sname` = ? ,`singername` = ?,`stype` = ?,`slink` = ? WHERE id=?';
    const value11 = req.params.id;
    db.query(sql11,[req.body.id,req.body.sname,req.body.singername,req.body.stype,req.body.slink,value11],(err,result)=>{
        if(err) res.json(result);
    })

})

//album

app.get('/album',(req,res)=>{
    db.query("SELECT * FROM album",(err,result)=>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/album',(req,res)=>{
    const q12="INSERT INTO track(albumid,title,artistid,genre,relesedate) VALUES (?)"
    const values12 = [
        req.body.albumid,
        req.body.title,
        req.body.artistid,
        req.body.genre,
        req.body.relesedate,
    ];

    db.query(q12,[values12],(err,data)=>{
        if(err) return res.json(err)
            return res.json("book has been creasted")
    })
})