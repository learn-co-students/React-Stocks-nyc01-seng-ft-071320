import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  filterStocks = () => {
    const purchasedStocks = this.props.stocks.filter(stock => stock.purchased === true)
    return purchasedStocks
  }

  renderStocks = () => {
    return this.filterStocks().map(stock => <Stock key={stock.id} id={stock.id} name={stock.name} ticker={stock.ticker} type={stock.type} price={stock.price} purchaseHandler={this.props.mainHandler} />)
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            this.renderStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
