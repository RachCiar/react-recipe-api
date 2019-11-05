import React, { Component } from 'react';
import './App.css';


class SearchRecipe extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchTerm: '',
        }
    }

    handleClick = (e) => {
        e.preventDefault()
        const inputClick = document.querySelector('.search')
        this.setState({
            searchTerm: inputClick.value
        })
        this.props.handleSubmit(inputClick.value)
    }

    render() {
        return (
            <div className='searchbar'>
                <form>
                    <input type="text" className="search" name='recipeSearch' type='text'></input>
                    <button onClick={(e) => this.handleClick(e)} >Search</button><br></br>
                </form>
            </div>
        )
    }
}

export default SearchRecipe