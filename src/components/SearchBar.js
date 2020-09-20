import React from 'react';

const SearchBar = (props) => {

  console.log("All the info sent to search", props)
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input type="radio" name="radio" value="Alphabetically" checked={null} onChange={(e) => props.filterHandler(e, props)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" name="radio" value="Price" checked={null} onChange={(e) => props.filterHandler(e, props)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => props.dropdown(e, props)}>
          <option name="dropdown" value="Tech">Tech</option>
          <option name="dropdown" value="Sportswear">Sportswear</option>
          <option name="dropdown" value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
