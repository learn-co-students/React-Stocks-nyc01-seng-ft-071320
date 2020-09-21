import React from 'react'

const Stock = (props) => (
  <div>

    <div className="card">
      <div className="card-body" onClick={()=>props.clickHandler(props.stockObj)} >
        <h5 className="card-title">{
            props.stockObj.name
          }</h5>
        <p className="card-text">{
            `${props.stockObj.ticker}: ${props.stockObj.price}`
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
