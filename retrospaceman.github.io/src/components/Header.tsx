import NavBar from "./NavBar";
import '../css/Header.css';

function Header() {
    return (
        <>
            <header>
                <img src="./src/assets/pfpspace.png" alt="RetroSpaceMan123" />
                <h1>RetroSpaceMan123.io</h1>
            </header>
            <NavBar />
        </>
    )
}

export default Header;