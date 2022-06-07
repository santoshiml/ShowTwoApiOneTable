import React, { useEffect } from "react";
import { showpost} from "../Redux/Action/userAction";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";


export default function PostInfo() {
  const postid = useParams();
  console.log('111', postid)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getposts = useSelector((state) => state);
  console.log("ppppppost", getposts);

  useEffect((id) => {
    dispatch(showpost(id));
  }, []);

  const comment = (id) =>{
    navigate(`/postinfo/comments/${id}`);
  }

  return (
    <div className="container">
      <center>
        <div className="sub-container">
          <button onClick={() => navigate(-1)}>Go back</button>
        </div>
        <h4>PostInfo</h4>
        <hr />
        {getposts.userReducer.postsData.filter((item) => item.id == postid.id).map((post, index) => {
          console.log('post11', post)
            return (
              <div key={index}>
                <p onClick={()=>{comment(post.id)}}><b>Post_Title:</b>{post.title}</p>
                <p><b>Post_Creator_Name: </b>
                
                  {getposts.userReducer.usersData
                    .filter((item) => item.id == post.userId)
                    .map((item) => item.username)}
                </p> 
              </div>
            );
          })}
        <br />
      </center>
    </div>
  );
}
