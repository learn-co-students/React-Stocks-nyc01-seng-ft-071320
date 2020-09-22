import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  stocks = () => {
    return this.props.stocks.map(stock => <Stock key={stock.id} stock={stock} clickHandler={this.props.clickHandler}/>)
  }
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.stocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
