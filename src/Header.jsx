import { Link } from 'react-router-dom' 
import { Avatar } from '@mui/material';
import './App.css';

import Nav from './Nav'
import User from './User'

import logo from './Pictures/bf2a7848f98e424a949522f4e61cb332.jpg'

const Header = ({isLoggedIn, setIsLoggedIn}) => {


 return (
    <header className={`App header`}>
        <nav>
            <Link className={' App logo'} to="/">        
                <Avatar
                    alt='Homepicture'
                    src={logo}
                    sx={{ width: 70, height: 70 }}
                    />
            </Link>
            <User isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <Nav/>
        </nav>
    </header>

    
 )
}

export default Header