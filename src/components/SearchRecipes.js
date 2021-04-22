import { useState, useEffect } from 'react';
import SearchRecipesItem from './SearchRecipesItem';
import { FaSearch } from "react-icons/fa"

const SearchRecipes = () => {

    const [query1, setQuery1] = useState('');
    const [query2, setQuery2] = useState('');
    const [query3, setQuery3] = useState('');
    const [query4, setQuery4] = useState('');
    const [query5, setQuery5] = useState('');
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const [error, setError] = useState(false)
    const [isLoaded, setIsLoaded] = useState(true)

    // const url = `http://127.0.0.1:8000/search?ingredients=${query1.toLowerCase()}&ingredients=${query2.toLowerCase()}&ingredients=${query3.toLowerCase()}&ingredients=${query4.toLowerCase()}&ingredients=${query5.toLowerCase()}`


    const searchRecipes = (e) => {
        e.preventDefault();
        // console.log("this works");

        // const query = "pineapple";

        const url = `http://127.0.0.1:8000/search?ingredients=${query1.toLowerCase()}&ingredients=${query2.toLowerCase()}&ingredients=${query3.toLowerCase()}&ingredients=${query4.toLowerCase()}&ingredients=${query5.toLowerCase()}`;
        fetch(url)
                .then(res => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true)
                        const fiveStarSearch = result.filter((recipe) => (recipe.rating === 5));
                        const topRatedSearch = [];
                        for (let i = 0; i < 2; i++) {
                            const randomRecipe = fiveStarSearch[Math.floor(Math.random() * fiveStarSearch.length)];
                            topRatedSearch.push(randomRecipe);
                        }
                        setSearchedRecipes(topRatedSearch)
                    },
                    (error) => {
                        setIsLoaded(true)
                        setError(error)
                    })}

        if (error) {
            console.log('error!!!')
            return (<div>Error: {error.message}</div>)            
        } else if (!isLoaded) {
            return (<div><p>Loading..</p></div>)
        } else {
            console.log('test')
            return ( 
                <div>
                    <form onSubmit = { searchRecipes } >
                    <div className="SearchBar">
                    <label htmlFor = "query" > Search for recipes by up to 5 ingredients: </label><br/><br/>
                    
                    <input className = "Input" name = "query" placeholder = "First ingredient" value = { query1 } onChange = { (e) => setQuery1(e.target.value) }/><br/> 
                    <input className = "Input" name = "query" placeholder = "Second ingredient (optional)" value = { query2 } onChange = { (e) => setQuery2(e.target.value) }/><br/> 
                    <input className = "Input" name = "query" placeholder = "Third ingredient (optional)" value = { query3 } onChange = { (e) => setQuery3(e.target.value) }/><br/> 
                    <input className = "Input" name = "query" placeholder = "Fourth ingredient (optional)" value = { query4 } onChange = { (e) => setQuery4(e.target.value) }/><br/> 
                    <input className = "Input" name = "query" placeholder = "Fifth ingredient (optional)" value = { query5 } onChange = {(e) => setQuery5(e.target.value) }/><br/> 
                    <button type = "submit" className="Btn"> <FaSearch/>    Search </button> 
                    </div>
                    </form> 
                    <div> {
                        searchedRecipes.map(recipe => ( 
                            <SearchRecipesItem key = { recipe.id } recipe = { recipe }/>
                        ))
                    } 
                    </div> 
                </div>
            )}

    // const searchRecipes = async(e) => {
    //     e.preventDefault();
    //     // console.log("this works");

    //     // const query = "pineapple";

    //     const url = `http://127.0.0.1:8000/search?ingredients=${query1.toLowerCase()}&ingredients=${query2.toLowerCase()}&ingredients=${query3.toLowerCase()}&ingredients=${query4.toLowerCase()}&ingredients=${query5.toLowerCase()}`;

    //     try {
    //         const response = await fetch(url);
    //         const data = await response.json();

    //         const fiveStarSearch = data.filter((recipe) => (recipe.rating === 5));
    //         const topRatedSearch = [];
    //         for (let i = 0; i < 2; i++) {
    //             const randomRecipe = fiveStarSearch[Math.floor(Math.random() * fiveStarSearch.length)];
    //             topRatedSearch.push(randomRecipe);
    //         }
    //         setSearchedRecipes(topRatedSearch);

    //     } catch (err) {
    //         console.error(err);
        
        // }

                
    
}

export default SearchRecipes;