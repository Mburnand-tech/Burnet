import { Link } from 'react-router-dom' 
import { Container } from '@mui/material';
import './App.css';
// import { useContext } from 'react'
// import { Switch } from '@mui/material'
// import { ThemeContext } from './contexts/themeContext'

import Nav from './Nav'


// import logo from './Pictures/bf2a7848f98e424a949522f4e61cb332.jpg'

const Header = ({isLoggedIn, setIsLoggedIn}) => {


 return (
    <Container className={`App header`} sx={{backgroundColor: 'primary.header'}} maxWidth="false"/*tyle="border-bottom: 1.5px solid rgb(118, 118, 115); , color: green;, position: static;, margin: auto; , clear: Inline-end;, padding: 0.5%;, height: 110px;, background-color: #d7c7ba;" */>
        <nav>
            <Link className={' App logo'} to="/">        
                {/* <Avatar
                    alt='Homepicture'
                    src={logo}
                    sx={{ width: 70, height: 70 }}
                    /> */}
            <h1 className={'App headerTitle'}>Burnet</h1>
            </Link>
            <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>          

        </nav>
    </Container>

    
 )
}

export default Header