import React from 'react'
import { useEffect } from 'react'

export default function Recipes() {


  useEffect(() => {



  }, [])

  return (
    <div className='recipes-container'>
      <div className='my-recipes'>
        <h2>My Recipes</h2>
        <div className='recipes-container'>
            <button>+ <br></br>Add new recipe</button>
        </div>
      </div>
      <div className='community-recipes'>
         <h2>Community Recipes</h2>
        <div className='recipes-container'>
        
        </div>
      </div>
    </div>
  )
}
