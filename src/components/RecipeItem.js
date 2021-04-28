import PropTypes from 'prop-types'
import { FaChild, FaStar } from "react-icons/fa"
import { useState, useEffect, useCallback } from 'react'
import Recipe from './Recipe'

const RecipeItem = ({ recipe }) => {
    const [showRecipe, setShowRecipe] = useState(false)
    const [pics, setPics]  = useState([])

    const onClick = () => {
        setShowRecipe(!showRecipe)
    }

    const recipeName = (recipe.name).toUpperCase()

    const fetchPics = useCallback(() => {
        fetch(
        `https://api.pexels.com/v1/search?query=${recipeName}&per_page=1`,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: '563492ad6f9170000100000112c00782d84d44bbafd7828b5154b405'
            }
        }
        )
        .then(res => res.json())
        .then(result => setPics(result.photos ?? []))
    }, [recipeName])

    useEffect(() => {
        fetchPics()
    }, [fetchPics])
    
    return (
        <div className='RecipeItem'>
            <img src={pics.map(pic => pic.src.small)} alt='img'/>
            <h3 onClick={onClick} className='RecipeTitle'>{recipeName}</h3>
            <p>Rating: {recipe.rating} <FaStar style={{color: 'gold'}} /></p>
            <p>Rated by: {recipe.n_ratings} <FaChild style={{color: 'green'}} /></p>
            {showRecipe && <Recipe recipe={recipe} /> }           
        </div>
    )
}

RecipeItem.propTypes = {
    recipe: PropTypes.object,
    image: PropTypes.array
}

export default RecipeItem