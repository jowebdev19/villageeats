import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function RecipeCard({data}) {
  const navigate = useNavigate()

  function openCommunityRecipe(){
    navigate(`/CommunityRecipe/${data.idMeal}`, {state:{...data}})
  }

  return (
    <div className='card-style-container' onClick={() => openCommunityRecipe()}>
      <img src={data.strMealThumb + "/large"} alt={data.strMeal}/>
      <h3>{data.strMeal}</h3>
      <p>Click to view Recipe</p>
    </div>
  )
}
