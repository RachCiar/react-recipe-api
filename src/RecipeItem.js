import React from 'react';
import './App.css';


const RecipeItem = (props) => {
    console.log('recipe item', props)
    
    return (
     <div>
        <li onClick={() => props.handleShowRecipe(props.recipe)}>
        <h2>{props.recipe.recipe.label}</h2>
        <img  src={props.recipe.recipe.image} alt={props.recipe.recipe.label}/>
        </li>
    </div> 
)


}





export default RecipeItem