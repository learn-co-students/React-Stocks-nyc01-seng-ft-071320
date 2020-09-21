import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderStocks = () => {
    return this.props.stocks.map(stockObj => <Stock key={stockObj.id} stock={stockObj} clickHandler={this.props.clickHandler} />)
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.props.stocks.length > 0 ? this.renderStocks() : null}
      </div>
    );
  }

}

export default PortfolioContainer;
