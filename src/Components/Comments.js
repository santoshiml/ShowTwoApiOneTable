import React, { useEffect } from "react";
import { showcomments } from "../Redux/Action/userAction";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";

export default function Comments() {
  const commentid = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getcomments = useSelector((state) => state);
  console.log('comments', getcomments)

  useEffect((id) => {
    dispatch(showcomments(id));
  }, []);

  return (
    <div className="container">
      <center>
        <div className="sub-container">
          <button onClick={() => navigate(-1)}>Go back</button>
        </div>
        <h4>Show Comments</h4>
        {getcomments.userReducer.postComment
          .filter((comment) => comment.postId == commentid.id)
          .map((commentInfo, index) => {
            return (
              <div key={index}>
                <p>
                  <b>Subject of Comment:</b>
                  {commentInfo.name}
                </p>
                <p>
                  <b>Comment Body:</b>
                  {commentInfo.body}
                </p>
                <p>
                  <b>Email:</b>
                  {commentInfo.email}
                </p>
                <hr />
              </div>
            );
          })}
      </center>
    </div>
  );
}
