import NavBar from "./NavBar";
import '../css/Header.css';
import pfpURL from '../assets/pfpspace.png';

function Header() {
    const source = pfpURL;
    return (
        <>
            <header>
                <img src={source} alt="RetroSpaceMan123" />
                <h1>RetroSpaceMan123.io</h1>
            </header>
            <NavBar />
        </>
    )
}

export default Header;