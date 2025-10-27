import React from 'react'
import RecipeCard from '../components/RecipeCard'

export default function Favorites() {
  
  return (
    <div className='recipes-container'>
      <div className='my-recipes'>
        <h2>My Recipes</h2>
        {JSON.parse(localStorage.getItem('favorites'))?.length !== 0 && localStorage.getItem("favorites") !== null ? 
          <div className='card-container'>
            {
              JSON.parse(localStorage.getItem('favorites'))?.map((meal) => {
                return <RecipeCard key={meal.idMeal} data={meal} type={"community"}/>
              })}
          </div> : <p className='no-favorites'>No favorited recipes</p>}
      </div>
    </div>
  )
}
