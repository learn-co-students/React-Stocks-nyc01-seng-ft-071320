import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => {
    return this.props.stocks.map(stock => <Stock key={stock.id} id={stock.id} name={stock.name} type={stock.type} ticker={stock.ticker} price={stock.price} purchaseHandler={this.props.mainHandler} />)
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          this.renderStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
