import PropTypes from 'prop-types'

const Button = ({ text }) => {
    return (
        <button className='Btn' style={{cursor: "pointer"}}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func, 
}

export default Button
