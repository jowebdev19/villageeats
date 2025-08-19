import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function RecipeCard({data, type}) {
  const navigate = useNavigate()

  function openCommunityRecipe(){
    navigate(`/CommunityRecipe/${data.idMeal}`, {state:{...data}})
  }

  function openCustomRecipe(){
    navigate(`/CustomRecipe/${data.idMeal}`, {state:{...data}})
  }
  return (
    <div className='card-style-container' onClick={() => {
      {type === "community" ? openCommunityRecipe() : openCustomRecipe()}
    }}>
      <img src={data.strMealThumb + "/large"} alt={data.strMeal}/>
      <h3>{data.strMeal}</h3>
      <p>Click to view Recipe</p>
    </div>
  )
}
