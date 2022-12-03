import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import { useState,useEffect, useContext  } from "react";
import axios from "axios";
import { AuthContext } from "../context/authContext";




const Single = () => {




  const navigate=useNavigate()

  const location =useLocation()
 // console.log(location.pathname.split('/')[2])
  const postId = location.pathname.split('/')[2]

  const {currentUser}=useContext(AuthContext)


  const [post, setPost] = useState({})




  useEffect(() => {
    const fetchData=async()=>{
      try { 
        const res = await axios.get(`http://localhost:8800/api/posts/${postId}`)
        console.log(res.data)
        setPost(res.data)
      } catch (error) {
        console.log(error)
      }

    }

    fetchData()
  }, [postId])


  const handleUpdate=async()=>{
  
  }

const handleDelete=async()=>{
  try {
    const res =await axios.delete(`http://localhost:8800/api/posts/${postId}`)
    console.log(res)
    navigate('/')
  } catch (error) {
    console.log(error)
  }

}









  return (
    <>
      <div className="single">
        {/*content */}
        <div className="content">


          <img
            src={post?.img}
            alt="imageContent"
          />

          <div className="user">

            {post.userImg && 
            <img
            src={post.userImg}
            alt="userImage"
          />}

            <div className="info">
              <span>{post.username}</span>
              <p>Posted {/*{moment(post.date).fromNow()} */}</p>
            </div>


            {currentUser.username===post.username  && 
            (
              <div className="edit">
              <Link to={`/write?edit=2`}>
                {" "}
                <img onClick={handleUpdate} src={Edit} alt="" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
            )}


          </div>


          
          <h1>
            {post.title}
          </h1>
          <p>
            {post.desc}
          </p>

        </div>

        {/*menu */}
      <Menu/>
      </div>
    </>
  );
};

export default Single;
