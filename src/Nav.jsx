import { useContext } from 'react'
import { Link } from 'react-router-dom' 
// import {  Menu } from '@mui/base'
import { ThemeContext } from './contexts/themeContext'

import MaterialUISwitch from './MaterialUISwitch'

import User from './User'

import './App.css';

const Nav = ({isLoggedIn, setIsLoggedIn}) => {

    const  { currentTheme, setCurrentTheme }  = useContext(ThemeContext)

    const changeTheme = () => {
        currentTheme ==='light' ? setCurrentTheme('dark') : setCurrentTheme('light')
    }

    return (
        <nav className={'App navBar'} >
                <Link className={'App navBarElement'} to='/category/coding'> Technology</Link>
                <Link className={'App navBarElement'} to='/category/football' > Sports</Link>
                <Link className={'App navBarElement'} to='/category/cooking' > LifeStyle</Link>
                <Link className={'App navBarElement'} to='/about' > About</Link>
                <User isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                <MaterialUISwitch className={'App themeButton'} onChange={() => {changeTheme()}}></MaterialUISwitch>
            
        </nav>
    )
}

export default Nav