import React from 'react';
import './App.css';
import RecipeItem from './RecipeItem'

const RecipeList = (props) => {
    console.log(props) 
    const recipeItemList = props.recipes.map((recipe, index) => {
        console.log(recipe.recipe.label)
        return <RecipeItem key={index} recipe={recipe} handleShowRecipe={props.handleShowRecipe} />
    })
    return (
        <ul>
            {recipeItemList}
        </ul>
    )


}


export default RecipeList