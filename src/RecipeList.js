import React from 'react';
import './App.css';


const RecipeList = (props) => (
    <div>
        {console.log(props)}
        <ul className="searchList">{
            props.recipes.map((recipe, index) => {
                console.log(recipe.recipe.label)
                return <li key={index}>
                    <h2>{recipe.recipe.label}</h2>
                    <img src={recipe.recipe.image} alt={recipe.recipe.label}/>
                </li>
            })
        }</ul>
    </div>
)

export default RecipeList