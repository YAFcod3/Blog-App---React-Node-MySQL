const express= require('express')
const  cors=require('cors')
const cookieParser=require('cookie-parser')

const postsRouter=require('./routes/posts.js')
const usersRouter=require('./routes/users.js')
const authRouter=require('./routes/auth.js')






const app=express();


app.use(express.json())
app.use(cookieParser())
app.use(cors())


app.use("/api/auth",authRouter)
app.use("/api/users",usersRouter)
app.use("/api/posts",postsRouter)



app.listen(8800,()=>{
  console.log('listen port 8800')
})