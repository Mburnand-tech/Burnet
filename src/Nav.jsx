import { useContext } from 'react'
import { Link } from 'react-router-dom' 
import { Switch } from '@mui/material'
import { ThemeContext } from './contexts/themeContext'

import './App.css';

const Nav = () => {

    const  { currentTheme, setCurrentTheme }  = useContext(ThemeContext)

    const changeTheme = () => {
        currentTheme ==='light' ? setCurrentTheme('dark') : setCurrentTheme('light')
    }

    return (
        <nav className={'App navBar'} >
            <Link className={'App navBarElement'} to='/category/coding'> Technology</Link>
            <Link className={'App navBarElement'} to='/category/football' > Sports</Link>
            <Link className={'App navBarElement'} to='/category/cooking' > LifeStyle</Link>
            <Switch className={'App themeButton'} onChange={() => {changeTheme()}}></Switch>
        </nav>
    )
}

export default Nav