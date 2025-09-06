
import React, { useState } from 'react'
import { useEffect } from 'react'
import RecipeCard from '../components/RecipeCard'
import { useNavigate } from 'react-router-dom'
import CustomRecipe from '../components/CustomRecipe'

export default function Recipes() {
  const [meals, setMeals] = useState([])
  const navigate = useNavigate()


  useEffect(() => {

    async function getMeal(){
      try{
         await fetch('http://localhost:3000/meal',
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log(data.meals)
          setMeals(data.meals)
        })
      } catch (err){
        throw new Error(err.message)
      }
    }


    getMeal()
  }, [])

  return (
    <div className='recipes-container'>
      <div className='my-recipes'>
        <h2>My Recipes</h2>
        <div className='card-container'>
            <button onClick={() => navigate("/NewRecipe")}>+ <br></br>Add new recipe</button>
             {
          localStorage.getItem("customRecipes") !== null ? JSON.parse(localStorage.getItem("customRecipes")).map((data) => {
            return <CustomRecipe key={data.mealName} data={data}/>
          }) : ''
         }
        </div>
      </div>
      <div className='community-recipes'>
         <h2>Community Recipes</h2>
        <div className='card-container'>
          {meals?.map((meal) => {
            return <RecipeCard key={meal.idMeal} data={meal}/>
          })}
        </div>
      </div>
    </div>
  )
}
