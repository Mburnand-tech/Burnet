import { Link } from 'react-router-dom'
import { Button } from '@mui/material';

import './App.css'
import 'animate.css';


const About = () => {
  


    return (
        <div className='App AboutContainer'>
            <h1 class="animate__animated animate__fadeIn">My NorthCoders Front-End Project</h1>
            <h3 class="animate__animated animate__bounceInDown">This is a personal project I created during a one week solo sprint as part of my 13 week full stack development course with Northcoders.</h3>
            <h3 class="animate__animated animate__bounceInUp">It is a sister project to the backend API I created a month prior, which utilises Express.JS and PostgreSQL.</h3>
            <h3 class="animate__animated animate__bounceInRight">The goal I decided to work towards was to create a Reddit-inspired topical discussion site, allowing users to vote up/vote down articles they like/dislike, as well as post comments on articles.</h3>
            <h3 class="animate__animated animate__bounceInLeft">Built using React, TailwindCSS for styling and Axios for API calls.</h3>
            {/* <div class="word"></div>
            <h1>Bloom -- Bloom News is a dynamic and informative online newspaper that offers a unique blend of articles tailored for cooking enthusiasts, coding experts, and football lovers. Our team of passionate writers is committed to providing the latest news, trends, and insights on these three diverse topics, making Bloom News the go-to source for anyone who wants to stay up-to-date on the latest happenings in these fields. Whether you are looking to explore new recipes, learn the latest coding languages, or stay abreast of the football world's latest news, Bloom News is the perfect platform to discover, engage and learn. Our commitment to providing high-quality content and cutting-edge insights ensures that our readers always stay ahead of the curve. Join us today and become a part of the Bloom News community</h1>
            <h1>Abi -- This is a frontend project I created during a one week solo sprint as part of my 13 week full stack development course with Northcoders.

            It is a sister project to the backend API I created a month prior, which utilises Express.JS and PostgreSQL
            
            The goal I decided to work towards was to create a Reddit-inspired topical discussion site, allowing users to vote up/vote down articles they like/dislike, as well as post comments on articles.
            
            Built using React, TailwindCSS for styling and Axios for API calls.
            
            
            Google fonts</h1> */}
            
            </div>
    )
}

export default About