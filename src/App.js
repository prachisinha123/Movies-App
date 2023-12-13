import React from "react";
import './App.scss';
import Header from './components/Header';
import HomeBanner from "./components/HomeBanner";
import Login from "./components/Login";
import Banner from "./components/Banner";
// import List from "./components/List";

import  Movie from "./components/Movie";
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <React.Fragment>
         
      <Router>
        <Routes>
           <Route path = "/" element={
            <React.Fragment>
                 <Header/>
                 <HomeBanner/> 
                </React.Fragment>
           }/>

          <Route path ="/login" element ={
               <React.Fragment>
                <Header/>
                 <Login page /> 
                 </React.Fragment> 
           }/>
             
           <Route path ="/dashboard" element ={ 
                <React.Fragment>
                 <Header/>
                 <Banner/>
                 {/* <List title ="Netflex Originals" param = "original"/>
                 <List title ="Trending Now" param = "trending"/>
                 <List title ="Now Playing" param = "now_playing"/>
                 <List title ="popular" param = "popular"/>
                 <List title ="Top Rated" param = "top_rated"/>
                 <List title ="UpComing" param = "upComing"/> */}
               
                 </React.Fragment>   
           }/>

             <Route path ="/movie" element ={
               <React.Fragment>
                {/* <Header/> */}
                 < Movie/>
                 </React.Fragment> 
           }/>
            
             

        </Routes>
      </Router>
    </React.Fragment>
   

   
  );
}

export default App;
 