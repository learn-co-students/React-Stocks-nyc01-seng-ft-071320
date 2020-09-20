import React from 'react';

const SearchBar = (props)=> {

    return(
      <div>
          <strong>Sort by:</strong>
          <label>
            <input type="radio" value="Alphabetically" name="radio" checked={props.radio==="Alphabetically"} onChange={(e)=>props.updateRadio(e.target.value)}/>
            Alphabetically
          </label>
          <label>
            <input type="radio" value="Price" name="radio" checked={props.radio==="Price"} onChange={(e)=>props.updateRadio(e.target.value)}/>
            Price
          </label>
          <br/>
          <label>
            <strong>Filter:</strong>
            <select name="filter" value={props.type} onChange={(e)=>props.updateCats(e.target.value)}>
              <option value="All">All</option>
              <option value="Tech">Tech</option>
              <option value="Sportswear">Sportswear</option>
              <option value="Finance">Finance</option>
            </select>
          </label>
        </div>
    )

  
}


export default SearchBar;
