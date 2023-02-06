import { Link } from 'react-router-dom' 
//import { Routes, Route } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to='/coding'> Technology</Link>
            <Link to='/football'> Sports</Link>
            <Link to='/cooking'> LifeStyle</Link>
        </nav>
    )
}

export default Nav