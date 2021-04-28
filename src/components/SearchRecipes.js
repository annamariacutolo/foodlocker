import { useState } from 'react'
import SearchRecipesItem from './SearchRecipesItem'
import { FaSearch } from "react-icons/fa"

const SearchRecipes = () => {

    const [query1, setQuery1] = useState('')
    const [query2, setQuery2] = useState('')
    const [query3, setQuery3] = useState('')
    const [query4, setQuery4] = useState('')
    const [query5, setQuery5] = useState('')
    const [searchedRecipes, setSearchedRecipes] = useState([])
    const [error, setError] = useState(false)
    const [isLoaded, setIsLoaded] = useState(true)

    const searchRecipes = (e) => {
        e.preventDefault()

        const url = `/search?ingredients=${query1.toLowerCase()}&ingredients=${query2.toLowerCase()}&ingredients=${query3.toLowerCase()}&ingredients=${query4.toLowerCase()}&ingredients=${query5.toLowerCase()}`
        fetch(url)
                .then(res => {
                    if (res.ok) {
                        return res.json()
                    } else if (res.status === 404) {
                        return Promise.reject('404 error')
                    }
                })
                .then(
                    (result) => {
                        setIsLoaded(true)
                        const fiveStarSearch = result.filter((recipe) => (recipe.rating === 5))
                        const topRatedSearch = []
                        for (let i = 0; i < 5; i++) {
                            const randomRecipe = fiveStarSearch[Math.floor(Math.random() * fiveStarSearch.length)]
                            if (!topRatedSearch.includes(randomRecipe)) {
                                topRatedSearch.push(randomRecipe)
                            } else {
                                i = i - 1
                            }
                            
                        }
                        setSearchedRecipes(topRatedSearch)
                    })
                .catch(
                    (error) => {
                        setIsLoaded(true)
                        setError(error)
                    })}

        if (error) {
            return (<div><p style={{color: 'aliceblue', textAlign: 'center'}}>No recipes found.</p></div>)            
        } else if (!isLoaded) {
            return (<div><p style={{color: 'aliceblue', textAlign: 'center'}}>Loading..</p></div>)
        } else {
            return ( 
                <div>
                    <form onSubmit = {searchRecipes}>
                    <div className="SearchBar">
                    <label className="SearchInstructions" htmlFor = "query" > Search for recipes by up to 5 ingredients: </label><br/><br/>
                    
                    <input className = "Input" name = "query" placeholder = "First ingredient" value = {query1} onChange = { (e) => setQuery1(e.target.value) }/><br/> 
                    <input className = "Input" name = "query" placeholder = "Second ingredient (optional)" value = {query2} onChange = { (e) => setQuery2(e.target.value) }/><br/> 
                    <input className = "Input" name = "query" placeholder = "Third ingredient (optional)" value = {query3} onChange = { (e) => setQuery3(e.target.value) }/><br/> 
                    <input className = "Input" name = "query" placeholder = "Fourth ingredient (optional)" value = {query4} onChange = { (e) => setQuery4(e.target.value) }/><br/> 
                    <input className = "Input" name = "query" placeholder = "Fifth ingredient (optional)" value = {query5} onChange = {(e) => setQuery5(e.target.value) }/><br/> 
                    <button type = "submit" className="Btn"><FaSearch /> Search</button> 
                    </div>
                    </form> 
                    <div> {
                        searchedRecipes.map(recipe => ( 
                            <SearchRecipesItem key = {recipe.id} recipe = {recipe} />
                        ))
                    } 
                    </div> 
                </div>
            )}
}

export default SearchRecipes