const db=require('../db.js')
const jwt =require('jsonwebtoken')




const getPosts =(req,res)=>{

  const q = req.query.cat
  ? "SELECT * FROM posts WHERE cat=?"
  : "SELECT * FROM posts"

  db.query(q,[req.query.cat],(err,data)=>{
    if(err) return res.status(500).send(err)
    
    return res.status(200).json(data)

  })

}




const getPost=(req,res)=>{

  const q ='SELECT `username`,`title`,`desc`,p.img, u.img AS userImg,`cat`,`date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id=? '

  db.query(q,[req.params.id],(err,data)=>{
    if(err) return res.status(500).json(err)

    return res.status(200).json(data[0])

  })

}

const addPost=(req,res)=>{
  res.json('posts cont')
}


const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;
    const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("You can delete only your post!");

      return res.json("Post has been deleted!");
    });
  });
};


const updatePost=(req,res)=>{

}



module.exports={getPosts,getPost,addPost,updatePost,deletePost};