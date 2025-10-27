import React from 'react'
import { useNavigate } from 'react-router-dom'
import EditRecipe from '../pages/EditRecipe'

export default function CustomRecipe({data}) {
  const navigate = useNavigate()

  console.log(data)
  function openCustomRecipe(){
    navigate(`/EditRecipe/${data.mealId}`, {state:{...data}})
  }
  return (
    <div className='card-style-container' onClick={() => openCustomRecipe()}>
      <img src={data.mealImage} alt={data.mealName}/>
      <h3>{data.mealName}</h3>
      <p>Click to view Recipe</p>
    </div>
  )
}
