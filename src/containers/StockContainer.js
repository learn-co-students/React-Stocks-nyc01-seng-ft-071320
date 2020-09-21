import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  stocks = () => this.props.stocks.map(stock => <Stock appClickHandler ={this.props.appClickHandler} stockObj={stock}/>)

  render() {
    console.log(this.props)
    // console.log(this.stocks())
    return (
      <div>
        <h2>Stocks</h2>
        {this.stocks()}
      </div>
    );
  }

}

export default StockContainer;
