import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  genStock = () => {
    return this.props.stocks.map(stock => <Stock key={stock.id} stock={stock}/>)
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.genStock()}
      </div>
    );
  }

}

export default StockContainer;
