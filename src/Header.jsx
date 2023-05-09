import { Link } from 'react-router-dom' 
import { Avatar } from '@mui/material';
import './App.css';
// import { useContext } from 'react'
// import { Switch } from '@mui/material'
// import { ThemeContext } from './contexts/themeContext'

import Nav from './Nav'


// import logo from './Pictures/bf2a7848f98e424a949522f4e61cb332.jpg'

const Header = ({isLoggedIn, setIsLoggedIn}) => {


 return (
    <header className={`App header`}>
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
    </header>

    
 )
}

export default Header