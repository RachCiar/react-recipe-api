
import axios from 'axios';

import dotenv from 'dotenv';

dotenv.config();
//api_key: process.env.REACT_APP_TMDB_API_KEY,

const app_key = process.env.APP_KEY
    const app_id = process.env.APP_ID
    const recipeEndpoint = `https://api.edamam.com/search?q=${this.state.query}&app_id=${app_id}&app_key=${app_key}`
    //q=${this.state.query}
    axios({
      url: recipeEndpoint,
      method: 'get'
    })
    .then(response => {
        console.log(response.data.hits[0])

    }, (error) => {
      console.log(error);
    });
  

    export default RecipeApi;