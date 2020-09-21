import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  stocks = () => {
    return this.props.myStock.map(el => <Stock key={el.id} stockObj={el} clickHandler={this.props.clickHandler} />)
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
