import './App.css';

import { Routes, Route } from 'react-router-dom';
//import { Link } from 'react-router-dom' 
import { useState } from 'react'

import Header from './Header'
import Home from './Home'
import Nav from './Nav'
import Content from './Content';
import Article from './Article';
import LoggedInSwitch from './LoggedInSwitch'
import LoginForm from './LoginForm';
import User from './User'

function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  

  //console.log(isLoggedIn, "Are they looged in?")

  return (
    <div >
        <Header />
        <User isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Nav/>
        <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/category/:topic" element={<Content/>}/>
                <Route path="/articles/:article_id" element={<Article/>}/>
        </Routes>     
    </div>
  );
}

export default App;
