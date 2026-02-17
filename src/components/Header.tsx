import NavBar from "./NavBar";
import '../css/Header.css';
import { Link } from 'react-router-dom'
import pfpURL from '../assets/pfpspace.png';

function Header() {
    const source = pfpURL;
    return (
        <>
            <header>
                <Link to='/' className='title'><img src={source} className="pfp" alt="RetroSpaceMan123" />RetroSpaceMan.io</Link>
                <NavBar />
                <div className='header-links'>
                    <a href="https://github.com/RetroSpaceMan123">Github</a>
                    <a href="https://www.linkedin.com/in/carlos-avila-b0495a261/">Linkedin</a>
                    <a href="https://retrospaceman123.itch.io/">Itch.io</a>
                    <a href="mailto:retrospaceman123@gmail.com">Email</a>
                </div>
            </header>
            
        </>
    )
}

export default Header;