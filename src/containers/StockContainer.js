import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  stocks = () => {
    return this.props.stocks.map(el => <Stock key={el.id} stock={el} addPort={this.props.addPort}/>)
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
