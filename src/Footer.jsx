import { Link } from 'react-router-dom'

import './App.css'

const Footer = () => {
    return (
        <div className={'App footerSection'}>
                <Link className={'App footerElement'} to="/" onClick="window.location.href='#top'"> Home</Link>
                <Link className={'App footerElement'} to='/category/coding'> Technology</Link>
                <Link className={'App footerElement'} to='/category/football' > Sports</Link>
                <Link className={'App footerElement'} to='/category/cooking' > LifeStyle</Link>
                <Link className={'App footerElement'} to='/about' > About</Link>
                <h1 className={'App contactDetails'}>
                    Contact Details
                    <ul>
                    <li className='App contactDetailsElements'>Name: Matthew Burnand</li>
                    <li className='App contactDetailsElements'>Linkedin: https://www.linkedin.com/in/m-burnand/</li>
                    <li className='App contactDetailsElements'>Email: mburnand@protonmail.com</li>
                    <li className='App contactDetailsElements'>Telephone number: +44 7720 271162</li>
                    <li className='App contactDetailsElements'>Open to work: Anywhere in the world!</li>
                    </ul>
                </h1>
                <ul className='App footerFakeLinksList'>
                    <il className={'App footerFakeLinks'}>Terms of Use</il>
                    <il className={'App footerFakeLinks'}>About the Burnnet</il>
                    <il className={'App footerFakeLinks'}>Privacy Policy</il>
                    <il className={'App footerFakeLinks'}>Cookies</il>
                    <il className={'App footerFakeLinks'}>Accessibility Help</il>
                    <il className={'App footerFakeLinks'}>Parental Guidance</il>
                    <il className={'App footerFakeLinks'}>Do not share or sell my info</il>
                </ul>
                <p1 className='App footerDiscloser'>Copyright © 2023 Burnnet. Burnnet is not responsible for the content of external sites. Read about our approach to external linking.</p1>
        </div>
    )
}

export default Footer
