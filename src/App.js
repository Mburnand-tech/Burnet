import './App.css';

import { Routes, Route } from 'react-router-dom';
//import { Link } from 'react-router-dom' 

import Header from './Header'
import Home from './Home'
import Nav from './Nav'
import Content from './Content';
import Article from './Article';
import User from './User'

function App() {
  return (
    <div >
        <Header />
        <User/>
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
