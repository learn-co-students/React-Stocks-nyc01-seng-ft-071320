import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  stocks = () => {
    let stocks = this.props.stocks
    if (this.props.filter.length > 0) {
      stocks = this.props.stocks.filter(stock => stock.type === this.props.filter)
    }
    return stocks.map(stock => <Stock key={stock.id} stock={stock} clickListener={this.props.clickListener} />)
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
