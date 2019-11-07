import React, { Component } from 'react';
import './App.css';


class SearchRecipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
        }
    }

    handleClick = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state.searchTerm)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleClick}>
                    <input
                        type="text"
                        className="search"
                        name='recipeSearch'
                        type='text'
                        value={this.state.searchTerm}
                        onChange={e => this.setState({ searchTerm: e.target.value })}
                    />
                    <button onClick={(e) => this.handleClick(e)} >Search</button><br></br>
                </form>
            </div>
        )
    }
}


export default SearchRecipe