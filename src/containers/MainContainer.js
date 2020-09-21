import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    myStocks: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then(res => res.json())
    .then(stocks => {
      this.setState(() => ({
        stocks: stocks
      }))
    })
  }

  buyStock = (e, stockObj) => {
    e.persist()
    if (!this.state.myStocks.includes(stockObj)){
      const newMyStocks = [stockObj, ...this.state.myStocks]
      this.setState(() => ({
        myStocks: newMyStocks
      }))
    }
  }

  sellStock = (e, stockObj) => {
    e.persist()
    const newMyStocks = this.state.myStocks.filter(stock => stock !== stockObj)
    this.setState(() => ({
      myStocks: newMyStocks
    }))
  }

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} clickHandler={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer myStocks={this.state.myStocks} clickHandler={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
