import PropTypes from 'prop-types'

const Recipe = ({ recipe }) => {      
    return (
        <div className='Recipe'>
            <p>Description: {recipe.description}</p>
            <p>Steps: {recipe.steps}</p>
        </div>
    )
}

Recipe.propTypes = {
    recipe: PropTypes.array.isRequired,
}

export default Recipe
