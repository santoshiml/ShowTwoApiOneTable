import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { showuser } from "../Redux/Action/userAction";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export default function Userinfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userid = useParams();
  console.log("1111", userid);

  const getusers = useSelector((state) => state);
  console.log(3333, getusers.userReducer.usersData);

  useEffect((id) => {
    dispatch(showuser(id));
  }, []);

  return (
    <div className="container">
      <center>
        <div>
          <button onClick={() => navigate(-1)} className="backbtn">            
            Go back
          </button>
        </div>
        <h5>User Details</h5>
        <hr />
        {getusers.userReducer.usersData
          .filter((item) => item.id == userid.id)
          .map((user, index) => {
            return (
              <div key={index}>
                <p>
                  <spam>
                    <b>User Name:</b>
                  </spam>{" "}
                  {user.username}
                </p>
                <p>
                  <spam>
                    <b>Full Name:</b>
                  </spam>{" "}
                  {user.name}
                </p>
                <p>
                  <spam>
                    <b>Email: </b>
                  </spam>{" "}
                  {user.email}
                </p>
                <p>
                  <spam>
                    <b>Website: </b>
                  </spam>
                  {user.website}
                </p>
                <p>
                  <spam>
                    <b>Company Details:</b>
                  </spam>
                </p>
                <p>
                  <spam>
                    <b>Name:</b>
                  </spam>{" "}
                  {user.company.name}
                </p>
                <p>
                  <spam>
                    <b>Bs:</b>
                  </spam>{" "}
                  {user.company.bs}
                </p>
                <p>
                  <spam>
                    <b>catchPhrase:</b>
                  </spam>{" "}
                  {user.company.catchPhrase}
                </p>
              </div>
            );
          })}
        <br />
      </center>
    </div>
  );
}
