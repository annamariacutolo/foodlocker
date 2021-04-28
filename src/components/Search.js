import { Link } from 'react-router-dom'
import Button from './Button'
import SearchRecipes from './SearchRecipes'

const Search = () => {
    return (
        <div>
            <Link to='/' style={{textDecoration: 'none'}} className="ButtonLink" >
                <Button text="Browse Recipes" style={{cursor: 'pointer'}} />
            </Link>
            <SearchRecipes />
        </div>
    )
}

export default Search
