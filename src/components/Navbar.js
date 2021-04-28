import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar