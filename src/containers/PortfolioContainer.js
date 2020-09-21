import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  stocks = () => this.props.favorites.map(stock => <Stock appClickHandler ={this.props.appClickHandler} stockObj={stock}/>)

  render() {
    console.log(this.props)
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
