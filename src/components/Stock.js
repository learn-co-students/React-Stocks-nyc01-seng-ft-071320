import React from 'react'


class Stock extends React.Component {
  clickHandler = () => {
    this.props.appClickHandler(this.props.stock)
  }

  render() {
    return (
      <div>

        <div className="card">
          <div className="card-body" onClick={this.clickHandler}>
            <h5 className="card-title">{
              this.props.stock.name
            }</h5>
            <p className="card-text">{
              this.props.stock.price
            }</p>
          </div>
        </div>


      </div >
    )
  }
};

export default Stock
