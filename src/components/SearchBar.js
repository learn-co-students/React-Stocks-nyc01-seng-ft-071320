import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" name="sortInput" value="Alphabetically" checked={props.sortInput === "Alphabetically" ? true : false} onChange={props.changeHandler}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" name="sortInput" value="Price" checked={props.sortInput === "Price" ? true : false} onChange={props.changeHandler}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.changeHandler} name="filterInput">
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
