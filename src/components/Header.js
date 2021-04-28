import PropTypes from 'prop-types'
import logo from '../logo.PNG'
import Navbar from './Navbar'

const Header = ({ logo }) => {
    return (
        <header className='Header'>
            <Navbar /> 
            <img src={logo} className='Logo' alt='logo'/>
        </header>
    )
}

Header.defaultProps = {
    logo: logo,
}

Header.propTypes = {
    logo: PropTypes.string.isRequired,
}

export default Header