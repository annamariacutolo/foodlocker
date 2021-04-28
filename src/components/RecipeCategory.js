import PropTypes from 'prop-types'
import RecipeItem from './RecipeItem'

const RecipeCategory = ({ recipes, title }) => {
    return (
        <div className='RecipeCategory'>
            <h2>{title}</h2>
            <div className='RecipeCategoryContent'>
                {recipes.map((recipe) => (
                    <RecipeItem key={ recipe.id } recipe={recipe} />
                ))}
            </div>
        </div>
    )
}

RecipeCategory.propTypes = {
    title: PropTypes.string.isRequired,
    recipes: PropTypes.array.isRequired,
}

export default RecipeCategory