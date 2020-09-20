import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  stocks = () => {
    return this.props.stocks.map(stock => <Stock key={stock.id} stock={stock} clickListener={this.props.clickListener} />)
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.stocks()
        }
      </div>
    );
  }

}

export default StockContainer;
