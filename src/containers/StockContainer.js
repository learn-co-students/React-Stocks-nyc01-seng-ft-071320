import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  stockArray = () => {
    return this.props.stocks.map(stock => <Stock key={stock.id} stock={stock} clickHandler={this.props.clickHandler}/>)
  }

  render() {
    console.log("Inside the stock container", this.props)
    return (
      <div>
        <h2>Stocks</h2>
        {this.stockArray()}
      </div>
    );
  }

}

export default StockContainer;
