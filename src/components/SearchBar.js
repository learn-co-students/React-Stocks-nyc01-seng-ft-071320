import React from 'react';

//change this into a class component, so that it can use "state"
class SearchBar extends React.Component {
  //create the state to rep an option on the search bar, whether it's checked or not
  state = {
    checked: false
  }

  optionHandler = (e) => {
    // console.log(e.target.value)
    this.setState({checked: e.target.value})
    this.props.sort(e.target.value)
  }
  
  render() {
    return (
      <div>
  
        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={this.state.checked === "Alphabetically"} onChange={this.optionHandler}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={this.state.checked === "Price"} onChange={this.optionHandler}/>
          Price
        </label>
        <br/>
  
        <label>
          <strong>Filter:</strong>
          <select onChange={this.props.filter}>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
  
  
      </div>
    );
  }
}


export default SearchBar;
