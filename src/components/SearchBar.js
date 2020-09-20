import React from 'react';

class SearchBar extends React.Component {

  state = {
    checkedOption: false
  }

  radioButtonHandler = (e) => {
    console.log(e.target.value)
    this.setState({checkedOption: e.target.value})
    this.props.sort(e.target.value)
  }

  render () {
    return (
      <div>
        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={this.state.checkedOption === 'Alphabetically'} onChange={this.radioButtonHandler}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={this.state.checkedOption === 'Price'} onChange={this.radioButtonHandler}/>
          Price
        </label>
        <br/>

        <label>
          <strong>Filter:</strong>
          <select onChange={this.props.filterHandler}>
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
