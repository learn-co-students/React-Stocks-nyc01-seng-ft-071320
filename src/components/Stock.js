import React from 'react'

const Stock = (props) => {
  // console.log(props)
  return(
    <div>
    <div className="card" onClick={()=>(props.togFav(props.el))}>
      <div className="card-body">
        <h5 className="card-title">{
            props.el.name
          }</h5>
        <p className="card-text">{
            props.el.price
          }</p>
      </div>
    </div>
  </div>
  )
};

export default Stock
