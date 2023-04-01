import { Routes, Route } from 'react-router-dom';
import { useState , useContext} from 'react'

import './App.css';

import Header from './Header'
import Home from './Home'
import Nav from './Nav'
import Content from './Content';
import Article from './Article';
import User from './User'


import { red, green } from '@mui/material/colors'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeContext } from './contexts/themeContext'


function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  const [theme, setTheme] = useState('light')
  const  { currentTheme }  = useContext(ThemeContext)
  
  const themeMUI = createTheme({
    components: {
      primary:{
        main: red[500],
      }
    },
    palette: {
      primary: {
        //main: '#F2DFCE',
        main: green[500],
      },
    },
  });

  return (
    <div className={`App ${currentTheme}`}>
      <ThemeProvider theme={themeMUI}>
        <Header />
        <User isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Nav theme={theme} setTheme={setTheme}/>
        <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/category/:topic" element={<Content/>}/>
                <Route path="/articles/:article_id" element={<Article/>}/>
        </Routes>     
        </ThemeProvider>
    </div>
  );
}

export default App;
