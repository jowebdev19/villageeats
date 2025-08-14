import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function RecipeCard({data, type}) {
  const navigate = useNavigate()

  function openCommunityRecipe(){
    alert("Community")
    //navigate()
  }

  function openCustomRecipe(){
    alert("Custom")
    //navigate()
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
