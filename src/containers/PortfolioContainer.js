import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {




  renderBoughtStocks = () => {
    return this.props.stocks.map(stock => {
      return <Stock key={stock.id} stock={stock} changeHandler={this.props.changeHandler} />
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.renderBoughtStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
