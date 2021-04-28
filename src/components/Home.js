import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RecipeCategory from './RecipeCategory'
import Button from './Button'

const Home = () => {
  const url = '/recipes'
  const [fiveStarRecipes, setFiveStarRecipes] = useState([])
  const [quickRecipes, setQuickRecipes] = useState([])
  const [italian, setItalian] = useState([])

  useEffect(() => {
    const getFiveStarRecipes = async () => {    
      const fiveStarRecipesFromServer = await fetchFiveStarRecipes()
      setFiveStarRecipes(fiveStarRecipesFromServer)
    }

    getFiveStarRecipes()
  }, [])

  const fetchFiveStarRecipes = async () => {
        const response = await fetch(url)
        const data = await response.json()
        const fiveStarData = data.filter((recipe) => (recipe.rating === 5))
        const topRated = []
        for (let i = 0; i < 3; i++) {
          const randomRecipe = fiveStarData[Math.floor(Math.random() * fiveStarData.length)]
          if (!topRated.includes(randomRecipe)) {
            topRated.push(randomRecipe)
          } else {
            i = i - 1
          }
        }
        return topRated
      }

  useEffect(() => {
    const getQuickRecipes = async () => {    
      const quickRecipesFromServer = await fetchQuickRecipes()
      setQuickRecipes(quickRecipesFromServer)
    }

    getQuickRecipes()
  }, [])

  const fetchQuickRecipes = async () => {
        const response = await fetch(url)
        const data = await response.json()
        const quickData = data.filter((recipe) => (recipe.minutes <= 30))
        const quick = []
        for (let i = 0; i < 3; i++) {
          const randomQuickRecipe = quickData[Math.floor(Math.random() * quickData.length)]
          if (!quick.includes(randomQuickRecipe)) {
            quick.push(randomQuickRecipe)
          } else {
            i = i - 1
          }
        }
        return quick
      }

      useEffect(() => {
        const getItalian = async () => {    
          const italianRecipesFromServer = await fetchItalian()
          setItalian(italianRecipesFromServer)
        }
    
        getItalian()
      }, [])
    
      const fetchItalian = async () => {
            const response = await fetch(url)
            const data = await response.json()
            const italianData = data.filter((recipe) => ((recipe.name).includes('pizza') || (recipe.name).includes('pasta') || (recipe.name).includes('italian') ))
            const italian = []
            for (let i = 0; i < 3; i++) {
              const randomItalianRecipe = italianData[Math.floor(Math.random() * italianData.length)]
              if (!italian.includes(randomItalianRecipe)){
                italian.push(randomItalianRecipe)
              } else {
                i = i - 1
              } 
            }
            return italian
          }

    return (
        <div>
            <Link to='/search' style={{textDecoration: 'none'}} className="ButtonLink">
              <Button text="Search Recipes"/>
            </Link>
            <RecipeCategory recipes={fiveStarRecipes} title='Top-Rated Recipes' />
            <RecipeCategory recipes={quickRecipes} title='Under 30 Minutes' />
            <RecipeCategory recipes={italian} title='Italian Recipes' />
        </div>
    )
}


export default Home