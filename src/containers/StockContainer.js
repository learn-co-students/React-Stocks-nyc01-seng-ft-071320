import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  stocks = () => {
    return this.props.stock.map(el => <Stock key={el.id} stockObj={el} clickHandler={this.props.clickHandler} />)
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        { this.stocks() }
      </div>
    );
  }

}

export default StockContainer;
