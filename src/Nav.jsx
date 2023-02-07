import { Link } from 'react-router-dom' 

//import { Routes, Route } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to='/category/coding'> Technology</Link>
            <Link to='/category/football'> Sports</Link>
            <Link to='/category/cooking'> LifeStyle</Link>
        </nav>
    )
}

export default Nav