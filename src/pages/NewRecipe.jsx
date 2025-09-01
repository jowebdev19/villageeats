import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function NewRecipe() {
    const navigate = useNavigate()
    const [recipeInfo, setRecipeInfo] = useState({
        
    })



  return (
    <form className='recipe-page-container'>
        <div className='page-actions'>
            <button onClick={() => navigate('/Recipes')}>Back to Recipes</button>
            <button>Save Meal</button>
        </div>
        <div className='meal-info'>
            <div className='image-container'>
                <img  alt="image" />
                <label htmlFor="image" className='image-upload'>Upload Image</label>
                <input id='image' name="image" type='file' style={{
                    "display": "none"
                }}/>
            </div>
            <div className='ingredients'>
                <input type="text" placeholder='Meal Name' />
                <h3>Ingredients</h3>
                {

                }
                <button>Add Ingredients</button>
            </div>
        </div>
        <div className='directions'>
            <h3>Instructions</h3>
            <textarea rows="20" cols="90" placeholder='Recipe instructions...'></textarea>
        </div>
    </form>
  )
}
