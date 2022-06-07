import React, { useEffect,useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { showposts, showusers} from "../Redux/Action/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {AreaChart, Area, XAxis, YAxis, 
  CartesianGrid, Tooltip, Label} from 'recharts';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const getposts = useSelector((state) => state);
  const getusers = useSelector((state) => state);
  console.log("22222", getposts);
  const [search, setNewsearch] = useState();
  const data1 = getposts.userReducer.usersData
  const data = [
    {name:'Bret', x:10, y:23},
    {name:'Antonette', x:10, y:3},
    {name:'Samantha', x:7, y:15},
    {name:'Karianne', x:13, y:35},
    {name:'Kamren', x:5, y:45 },
    {name:'Elwyn.S', x:15, y:25},
    {name:'Maxime_N', x:10, y:17  },
    {name:'Delphine', x:2, y:32  },
    {name:'Moriah.St', x:12, y:43 },
];

  useEffect(() => {
    dispatch(showposts());
    dispatch(showusers()); 
  }, []);

  const post = (id) =>{
    navigate(`/postinfo/${id}`);
  }

  const user =(id) =>{
      navigate(`/userinfo/${id}`)
  }

  const handleSearch = (e) => {
    e.preventDefault() 
    setNewsearch(e.target.value);
  };


  const filtered =!search
  ? (getposts.userReducer.postsData)
  :getposts.userReducer.postsData.filter((data) =>
    data.title.toLowerCase().includes(search.toLowerCase())
  )
  

  // const filtered =!search
  // ? (getposts.userReducer)
  // :((getposts.userReducer.postsData.filter((data) =>
  //   data.title.toLowerCase().includes(search.toLowerCase()))) 
  //   ||
  //   (getposts.userReducer.usersData.filter((item) =>
  //   item.username.toLowerCase().includes(search.toLowerCase())))
    
  //   )


// console.log('333', filtered)


  return (
    <div className="mainContainer">
      <center>
      <h4>Show Posts</h4>
      <input type="text" value={search} 
      onChange={handleSearch} 
    
      placeholder="Search for..."/>
      <br/><br/>

      {/* <AreaChart width={800} height={300} data={data1}>
        <CartesianGrid/>
        <XAxis dataKey="username" fontSize="10px"  labels="user" />
         <Tooltip /> 
        <YAxis dataKey="title" fontSize ="10px"/>

         <Area type="monotone" dataKey="username" 
             stroke="black" fill="black" />

        <Area type="monotone" dataKey="title" 
             stroke="blue" fill="blue" />
        <Area type="monotone" dataKey="z" 
            stackId="2" stroke="green" fill="green" />
    </AreaChart> */}


      <AreaChart width={800} height={300} data={data}>
        <CartesianGrid/>
        <XAxis dataKey="name" fontSize ="10px"/>
        {/* <Tooltip /> */}
        <YAxis />
        <Area type="monotone" dataKey="x" 
            stackId="1" stroke="black" fill="black" />
        <Area type="monotone" dataKey="y" 
            stackId="1" stroke="blue" fill="blue" />
    </AreaChart>

      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Post_Creator_Name</th>
            </tr>
          </thead>
          <tbody>
            {/* {getposts?.userReducer?.postsData.map((posts, index) => { */}

             {filtered.map((posts, index) => {
        
              return (
                <tr key={index}>
                  <td>{posts.id}</td>
                  <td onClick={()=>{post(posts.id)}}>{posts.title}</td>
                  <td onClick={()=>{user(posts.userId)}}>
                   {getposts.userReducer.usersData.filter((item)=>
                   item.id===posts.userId).map((item) =>item.username)}
                      </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      </center>
    </div>
  );
};


export default Dashboard;
