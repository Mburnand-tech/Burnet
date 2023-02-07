import './App.css';

import { Routes, Route } from 'react-router-dom';
//import { Link } from 'react-router-dom' 

import Header from './Header'
import Home from './Home'
import Nav from './Nav'
import Content from './Content';


function App() {
  return (
    <div >
        <Header />
        <Nav/>
        <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/category/:topic" element={<Content/>}/>
        </Routes>     
    </div>
  );
}

export default App;
