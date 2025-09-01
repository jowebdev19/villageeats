import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Home() {


  localStorage.setItem("favorites", JSON.stringify([]))
  const navigate = useNavigate()
  return (
    <>
      <div className='hero-container'>
        <img src='./veggiehero.jpg' alt='Person chopping vegetables' />
        <div className='screen'>&nbsp;</div>
        <h2>Tons of delicious recipes all in one place</h2>
        <p>View or create delicious recipes for all of your favorite foods. Save your favorite recipes for future scrumptious meals!</p>
        <button onClick={() => navigate('/Recipes')}>Get Started</button>
      </div>
    </>
  )
}
