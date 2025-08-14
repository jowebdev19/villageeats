
import React, { useState } from 'react'
import { useEffect } from 'react'
import RecipeCard from '../components/RecipeCard'

export default function Recipes() {
  const [meals, setMeals] = useState([])


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
        throw new Error()
      }
    }


    getMeal()
  }, [])

  return (
    <div className='recipes-container'>
      <div className='my-recipes'>
        <h2>My Recipes</h2>
        <div className='card-container'>
            <button>+ <br></br>Add new recipe</button>
            {meals?.map((meal) => {
              return <RecipeCard key={meal.idMeal} data={meal} type={"custom"}/>
            })}
        </div>
      </div>
      <div className='community-recipes'>
         <h2>Community Recipes</h2>
        <div className='card-container'>
        
        </div>
      </div>
    </div>
  )
}
