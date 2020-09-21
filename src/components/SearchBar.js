import React from 'react';

class SearchBar extends React.Component {

  state = {
    selectedOption: ''
  }

  clickHandler = (event) => {
    event.persist()
    console.log(event.target.value)
    this.setState(()=>({
      selectedOption: event.target.value
    }))
  }

  categorySort = (event) => {
    // console.log(event.target.value)
    this.props.sortCategory(event.target.value)
  }



  render(){
    return (
      <div>
  
        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={this.state.selectedOption === "Alphabetically"} onChange={this.props.sortAlpha} onClick={this.clickHandler} />
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={this.state.selectedOption === "Price"} onChange={this.props.sortPrice} onClick={this.clickHandler} />
          Price
        </label>
        <br/>
  
        <label>
          <strong>Filter:</strong>
          <select onChange={this.categorySort}>
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
