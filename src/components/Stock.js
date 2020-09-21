import React from 'react'



const Stock = (props) => {

  const clickHandler = () => {
    // console.log(props)
    props.purchaseHandler(props)
  }

  return(
    <div>

    <div className="card" onClick={clickHandler}>
      <div className="card-body">
        <h5 className="card-title">{
            //Company Name
            props.name
          }</h5>
        <p className="card-text">
          {props.ticker}: {props.price}
        </p>
      </div>
    </div>


  </div>
  )

}

  


export default Stock
