import { FaFacebookSquare,  FaInstagram, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
    return ( 
        <footer className = 'Footer'>
        <h1>
            <FaFacebookSquare style={{cursor: "pointer"}} />
        </h1>
        <h1>
            <FaInstagram style={{cursor: "pointer"}} />
        </h1>
        <h1>
            <FaTwitter style={{cursor: "pointer"}} />
        </h1>
        <h1>
            <FaEnvelope style={{cursor: "pointer"}} />
        </h1>
        <h1>
            <FaGithub style={{cursor: "pointer"}} />    
        </h1>
        <h5>Copyright© 2021 Food Locker</h5>
        </footer>
    )
}

export default Footer