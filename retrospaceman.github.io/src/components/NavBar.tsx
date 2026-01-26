import { Link } from 'react-router-dom'
import '../css/NavBar.css'

function NavBar() {
    return (
    <nav>
        <ul>
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/about' className='nav-link'>About</Link>
            <Link to='/projects' className='nav-link'>Projects</Link>
            <Link to='/contact' className='nav-link'>Contact Me</Link>
        </ul>
    </nav>
    )
}

export default NavBar