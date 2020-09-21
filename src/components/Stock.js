import React from 'react'

class Stock extends React.Component {

  stockClickHandler = () => {
    this.props.appClickHandler(this.props.stockObj)
  }

  render(){
    console.log(this.props)

    return (
      <div>
  
        <div onClick={this.stockClickHandler} className="card">
          <div className="card-body">
            <h5 className="card-title">{
                this.props.stockObj.name
              }</h5>
            <p className="card-text">
                {this.props.stockObj.ticker}: {this.props.stockObj.price}
              </p>
          </div>
        </div>
  
      </div>
    )
  }

  }

export default Stock
