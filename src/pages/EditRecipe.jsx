import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'


export default function EditRecipe() {
    const location = useLocation()
    const navigate = useNavigate()
    const [newIngredient, setNewIngredients] = useState({
        amount: "",
        ingredient: "",
        openModal: 'none'
    })
    const [recipeInfo, setRecipeInfo] = useState({
        mealId: "",
        mealName: "",
        mealInstructions: "",
        mealImage: "",
        ingredients: [],
    })
    const customRecipes = JSON.parse(localStorage.getItem("customRecipes"))
    const imageRef = useRef()

    console.log(recipeInfo)

    function modalHandler(e){
        e.preventDefault()
        newIngredient.openModal === 'none' ? setNewIngredients((prevState) => {
            return {...prevState, openModal: 'flex'}})
     : setNewIngredients((prevState) => {
            return {...prevState, openModal: 'none'}})
    }

    function saveMeal(){
        if(recipeInfo.mealName.trim() === "" || recipeInfo.mealInstructions.trim() === "" || recipeInfo.ingredients.length === 0){
            alert("Fill out every field and add at least one ingredient before submitting")
        } else {
            if (customRecipes !== null){
                const editedVersion = JSON.parse(localStorage.getItem('customRecipes')).map((recipe) => {
                    if (recipe.mealId === location.state.mealId){
                        return recipeInfo
                    } else {
                        return recipe
                    }
                })
                localStorage.setItem("customRecipes", JSON.stringify(editedVersion))
            } else {
                localStorage.setItem("customRecipes", JSON.stringify([recipeInfo]))
            }
            navigate('/Recipes')
        }

    }

    function onImageChange(event){
        let file = event.target.files[0]
        
        if(file){
            const fr = new FileReader()
            fr.readAsDataURL(file)

            fr.addEventListener('loadend', () => {
                const url = fr.result
                setRecipeInfo((prevState) => {
                    return {...prevState, mealImage: url}
                })
            })
        }
    }

    function addIngredient(){

        if (newIngredient.ingredient.trim() === "" || newIngredient.amount.trim() === ""){
            alert("Please insert an ingredient and an amount")
        } else {
            setRecipeInfo((prevState) => {
                return {...prevState, ingredients: [...prevState.ingredients, {name: newIngredient.ingredient, amount: newIngredient.amount}]}
        })
            setNewIngredients((prevState) => {
                return {...prevState, openModal: 'none'}
            })
        }

    }

    function deleteIngredient(index){
        const newIngredients = recipeInfo.ingredients.filter(ingredient => recipeInfo.ingredients.indexOf(ingredient) !== index)
        setRecipeInfo((prevState) => {
            return {...prevState, ingredients: newIngredients}
        })
    }

    function deleteRecipe(mealId){
        const newRecipes = JSON.parse(localStorage.getItem('customRecipes')).filter(recipe => recipe.mealId !== mealId)
        localStorage.setItem('customRecipes', JSON.stringify(newRecipes))
        navigate('/Recipes')
    }

    useEffect(() => {
        if (location.state){
            setRecipeInfo(location.state)
        }
    }, [])
 
  return (
    <form className='recipe-page-container'>
        <div className='ingredient-modal' style={{display: `${newIngredient.openModal}`}}>
            <div className='modal-container'>
                <h3>Add Ingredient</h3>
                <div className="modal-inputs">
                    <input placeholder='Amount' onChange={(e) => setNewIngredients({...newIngredient, amount: e.target.value})} type="text" />
                    <input placeholder='Ingredient'  onChange={(e) => setNewIngredients({...newIngredient, ingredient: e.target.value})} type="text" />
                </div>
                <div className="modal-buttons">
                    <button type='button' onClick={() => addIngredient()}>Add</button>
                    <button type='button' onClick={() => modalHandler(event)}>Close</button>
                </div>
            </div>
        </div>
        <div className='page-actions'>
            <button onClick={() => navigate('/Recipes')}>Back to Recipes</button>
            <button onClick={() => deleteRecipe(location.state.mealId)}>Delete Recipe</button>
            <button onClick={() => saveMeal()}>Save Meal</button>
        </div>
        <div className='meal-info'>
            <div className='image-container'>
                <img ref={imageRef} alt="image" src={recipeInfo.mealImage === "" ? "public/—Pngtree—no image vector illustration isolated_4979075.png" : recipeInfo.mealImage} />
                <label htmlFor="image" className='image-upload'>Upload Image</label>
                <input onChange={() => onImageChange(event)} id='image' name="image" type='file' style={{
                    "display": "none"
                }}/>
            </div>
            <div className='ingredients'>
                <input type="text" onChange={(e) => setRecipeInfo({...recipeInfo, mealName: e.target.value})} defaultValue={location.state?.mealName} placeholder='Meal Name' />
                <h3>Ingredients</h3>
                {
                   recipeInfo.ingredients.length === 0 ? <p style={{fontSize: "1.2vw", margin: "20px"}}>No ingredients added</p> 
                   : 
                   <ul>
                   {recipeInfo.ingredients?.map((ingredient, index) => {
                       return <li key={ingredient.name}>{ingredient.amount} {ingredient.name} <button onClick={() => deleteIngredient(index)} className='delete-ingredient'>X</button></li>
                    })} 
                    </ul>
                }
                <button type='button' onClick={() => modalHandler(event)}>Add Ingredient</button>
            </div>
        </div>
        <div className='directions'>
            <h3>Instructions</h3>
            <textarea onChange={(e) => setRecipeInfo({...recipeInfo, mealInstructions: e.target.value})} defaultValue={location.state?.mealInstructions} rows="20" cols="90" placeholder='Recipe instructions...'></textarea>
        </div>
    </form>
  )
}
