import React, { Component } from 'react';
import './App.css';
import SearchRecipe from './SearchRecipe'
import RecipeList from './RecipeList'
import axios from 'axios'
import dotenv from 'dotenv';
dotenv.config();


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: [],
      recipe: [],
      query: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleSubmit = this.handleShowRecipe.bind(this);
  }
  //this component fires before it rendors. Works the same as windows.onload

  handleSubmit(searchTerm) {
    const app_key = process.env.APP_KEY
    const app_id = process.env.APP_ID
    const recipeEndpoint = `https://api.edamam.com/search?q=${searchTerm}&app_id=${app_id}&app_key=${app_key}`

    axios({
      url: recipeEndpoint,
      method: 'get'
    })
      .then(response => {
        this.setState({
          recipes: response.data.hits.slice(0, 10),
          // recipe: response.data.hits.recipe.recipe,
          query: searchTerm
        })
        console.log(this.state.recipe)

      }, (error) => {
        console.log("ERROR!!!!!", error);
      });

  };

  // handleShowRecipe = (recipe) => {
  //   this.setState({ selectedRecipe: recipe})
  //   return(
  //     {/* <ShowRecipe recipeLink={this.state.selectedRecipe}/>  */}
  //   )
     
  // }

  render() {
   
    console.log("Test", this.state.recipes)
    return (
      <div className="App">
        <h1>Recipes</h1>
        <SearchRecipe handleSubmit={this.handleSubmit} />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
