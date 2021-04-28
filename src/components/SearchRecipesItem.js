import { FaClock } from 'react-icons/fa'

const SearchRecipesItem = ({ recipe }) => {
    const recipeName = (recipe.name).toUpperCase()
    return (
        <div className="SearchResult">
            <h3>{recipeName}</h3>
            <p>Description: {recipe.description}</p>
            <p>Steps: {recipe.steps}</p>
            <small><FaClock /> {recipe.minutes} mins</small>
        </div>
    )
}

export default SearchRecipesItem

