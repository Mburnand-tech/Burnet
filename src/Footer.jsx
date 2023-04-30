import { Link } from 'react-router-dom'

import './App.css'

const Footer = () => {
    return (
        <div className={'App footerSection'}>
                <Link className={'App footerElement'} to='/category/coding'> Home</Link>
                <Link className={'App footerElement'} to='/category/coding'> Technology</Link>
                <Link className={'App footerElement'} to='/category/football' > Sports</Link>
                <Link className={'App footerElement'} to='/category/cooking' > LifeStyle</Link>
                <Link className={'App footerElement'} to='/about' > About</Link>
                <h1 className={'App contactDetails'}>
                    Contact Details
                    <ul>
                    <li>Linedin:</li>
                    <li>Link to CV:</li>
                    <li>Email:</li>
                    <li>Telephone number:</li>
                    </ul>
                </h1>

        </div>
    )
}

export default Footer
