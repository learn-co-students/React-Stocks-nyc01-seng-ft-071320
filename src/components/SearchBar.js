import React from 'react';



class SearchBar extends React.Component {

  state = {
    filterType: "Tech"
  }
  checkChangeHandler = (e) => {
    this.props.appTickHandler(e.target.value)
  }

  filterChangeHandler = (e) => {
    e.persist()
    this.setState(() => ({ filterType: e.target.value }), () => this.props.appFilterHandler(this.state.filterType))
  }

  render() {
    console.log(this.state.filterType)
    return (
      <div>

        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={null} onChange={this.checkChangeHandler} />
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={null} onChange={this.checkChangeHandler} />
          Price
        </label>
        <br />

        <label>
          <strong>Filter:</strong>
          <select onChange={this.filterChangeHandler}>
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
