import React from 'react';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from '../Components/Dashboard';
import Postinfo from '../Components/Postinfo';
import Userinfo from '../Components/Userinfo';
import Comments from '../Components/Comments';

const Navigation = () =>{
    return(
        <div>
            <Router>
                <Routes>
                    <Route path ="/" element={< Dashboard/>}/>
                    <Route path ="/userinfo/:id" element={<Userinfo />} />
                    <Route path ="/postinfo/:id" element ={<Postinfo />} />
                    <Route path ="/postinfo/comments/:id" element ={<Comments />} />
                    </Routes>
                </Router>
        </div>
    )

}

export default Navigation;