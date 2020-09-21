import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderPortfolio = () => {
    return this.props.stocks.map(el => <Stock key={el.id} stock={el} addPort={this.props.removeStock}/>)
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.renderPortfolio()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
