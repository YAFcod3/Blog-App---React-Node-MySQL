const db = require('../db.js')
const bcrypt = require('bcryptjs')
const jwt=require('jsonwebtoken')



const register=(req,res)=>{

  // CHECK EXISTING  USER 

  const q = "SELECT * FROM users WHERE email = ? OR username = ?"

  db.query( q,[req.body.email,req.body.username] , (err,data)=>{
    if(err) return res.json(err);
    if(data.length)  return res.status(409).json('user already exists!');

    //Hash the password and create user
    const salt=bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password,salt)                                                          
    //create
    const q = 'INSERT INTO users(`username`, `email`, `password`) VALUES(?) '

    const  values =[
      req.body.username,
      req.body.email,
      hash
    ]

    db.query(q,[values],(err,data)=>{
      if(err) return res.json(err)
      return res.status(200).json('User has been created')

    })

  })

  

}


const login=(req,res)=>{

  //VERIFY USER

  const q= 'SELECT * FROM users WHERE username=?'

  db.query(q,[req.body.username],(err,data)=>{

    if(err) return res.json(err);
    if (data.length ===0) return res.status(404).json("User not found!")

    //exist . check pass
    const isPasswordCorrect=bcrypt.compareSync(
      req.body.password,
       data[0].password)

    if(!isPasswordCorrect) return res.status(400).json("Wrong username or password!")

    //pass correct ,gen token
    const token =jwt.sign({ id: data[0].id},"jwtkey");
    

    //MENOS EL PASSWORD ,ENVIA TODO AL NAVEGADOR
    const {password, ...other}=data[0]

    //send token and user info
    res.cookie("access_token",token,{httpOnly:true}).status(200).json(other)


  })


 
}




const logout =(req,res)=>{
  
  res.clearCookie("access_token",{sameSite:"none",secure:true}).status(200).json("User has been logout")
}




module.exports={
  register,
  login,
  logout
}