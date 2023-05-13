import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
import { useContext} from 'react'

import './App.css'
import 'animate.css';
import { ThemeContext } from './contexts/themeContext'

const About = () => {
  
    const { currentTheme }  = useContext(ThemeContext)

    return (
        <div className='App AboutContainer'>
            <h1 class={currentTheme === 'light' ? "animate__animated animate__fadeIn" : "animate__animated animate__fadeInDark"}>My NorthCoders Front-End Project</h1>
            <h3 class={currentTheme === 'light' ? "animate__animated animate__bounceInDown" : "animate__animated animate__bounceInDownDark"}>This is a personal project I created during a one week solo sprint as part of my 13 week full stack development course with Northcoders.</h3>
            <h3 class={currentTheme === 'light' ? "animate__animated animate__bounceInUp" : "animate__animated animate__bounceInUpDark"}>It is a sister project to the <a class="animate__animated animate__bounceInUp Link" href='https://github.com/Mburnand-tech/News_Server'>backend API </a>I created a month prior, which utilises Express.JS and PostgreSQL.</h3>
            <h3 class={currentTheme === 'light' ? "animate__animated animate__bounceInRight" : "animate__animated animate__bounceInRightDark"}>The goal I decided to work towards was to create a Reddit-inspired topical discussion site with a scrollable and responsive display that allows users to like articles and comments and post comments on articles. Additional features include a filter bar, account logging in, colour theme switch, scroll to top button and delete comments functionality.</h3>
            <h3 class={currentTheme === 'light' ? "animate__animated animate__bounceInLeft" : "animate__animated animate__bounceInLeftDark"}>Built using React, MUI for styling and Axios for API calls.</h3>
            
        </div>
    )
}

export default About