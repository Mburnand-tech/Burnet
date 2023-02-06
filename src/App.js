import './App.css';

//import { Routes, Route } from 'react-router-dom';
//import { Link } from 'react-router-dom' 

import Header from './Header'
import Nav from './Nav'
import Content from './Content';


function App() {
  return (
    <div >
        <Header />
        <Nav/>
        <Content/>      
    </div>
  );
}

export default App;
